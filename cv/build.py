"""
CV Build Generator (Oxford Format)
Generates single-page, ATS-friendly vector PDFs tailored by job profile and language.
Uses Microsoft Edge headless for crisp typography and zero external C-dependencies.
"""

import os
import sys
import json
import argparse
import subprocess
from pathlib import Path
from jinja2 import Template

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

def load_data(data_path):
    with open(data_path, "r", encoding="utf-8") as f:
        return json.load(f)

def render_html(template_path, data, lang="es", profile_name="fullstack"):
    with open(template_path, "r", encoding="utf-8") as f:
        tmpl = Template(f.read())

    prof = data["profiles"].get(profile_name, data["profiles"]["general"])
    
    # Profile specific data
    profile_data = {
        "title": prof[f"title_{lang}"],
        "summary": prof[f"summary_{lang}"],
        "skills_priority": prof["skills_priority"]
    }

    # Education
    edu = data["education"]
    education_data = {
        "school": edu[f"school_{lang}"],
        "degree": edu[f"degree_{lang}"],
        "location": edu["location"],
        "dates": edu[f"dates_{lang}"],
        "focus": edu[f"focus_{lang}"]
    }

    # Experience
    experience_data = []
    for job in data["experience"]:
        experience_data.append({
            "company": job["company"],
            "location": job["location"],
            "role": job[f"role_{lang}"],
            "dates": job[f"dates_{lang}"],
            "bullets": job[f"bullets_{lang}"]
        })

    # Selected Projects for this profile
    selected_projs = []
    for p_key in prof["selected_projects"]:
        p = data["projects"].get(p_key)
        if p:
            selected_projs.append({
                "title": p[f"title_{lang}"],
                "tech": p["tech"],
                "bullets": p[f"bullets_{lang}"]
            })

    # Skills mapped by language
    skills_data = {}
    for k, v in data["skills"].items():
        skills_data[k] = {
            "label": v[f"label_{lang}"],
            "items": v["items"]
        }

    rendered = tmpl.render(
        lang=lang,
        personal=data["personal"],
        profile_data=profile_data,
        education=education_data,
        experience=experience_data,
        selected_projects=selected_projs,
        skills=skills_data
    )
    return rendered

def html_to_pdf(html_content, output_pdf_path):
    output_pdf_path = Path(output_pdf_path).resolve()
    output_pdf_path.parent.mkdir(parents=True, exist_ok=True)

    temp_html = output_pdf_path.with_suffix(".temp.html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)

    html_uri = f"file:///{str(temp_html).replace('\\', '/')}"
    pdf_dest = str(output_pdf_path)

    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        f"--print-to-pdf={pdf_dest}",
        "--no-pdf-header-footer",
        html_uri
    ]

    try:
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error generando PDF {output_pdf_path}: {e}")
        return False
    finally:
        if temp_html.exists():
            temp_html.unlink()

    return output_pdf_path.exists()

def main():
    parser = argparse.ArgumentParser(description="Oxford CV Generator")
    parser.add_argument("--profile", default="all", choices=["all", "fullstack", "devops", "ai", "general"], help="Perfil de la vacante")
    parser.add_argument("--lang", default="all", choices=["all", "es", "en"], help="Idioma (es, en o all)")
    parser.add_argument("--publish", action="store_true", help="Copia el CV principal a public/cv.pdf")
    args = parser.parse_args()

    root_dir = Path(__file__).resolve().parent.parent
    cv_dir = root_dir / "cv"
    data_path = cv_dir / "data.json"
    template_path = cv_dir / "template.html"
    dist_dir = cv_dir / "dist"
    dist_dir.mkdir(exist_ok=True)

    data = load_data(data_path)

    profiles = ["fullstack", "devops", "ai", "general"] if args.profile == "all" else [args.profile]
    langs = ["es", "en"] if args.lang == "all" else [args.lang]

    generated = []

    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')

    print("\n========================================================")
    print(" [CV] GENERADOR OXFORD DE CV (ATS-FRIENDLY // 1 PAGINA) ")
    print("========================================================")

    for p in profiles:
        for l in langs:
            filename = f"Kevin_Garrido_CV_{p.upper()}_{l.upper()}.pdf"
            out_path = dist_dir / filename
            html = render_html(template_path, data, lang=l, profile_name=p)
            ok = html_to_pdf(html, out_path)
            if ok:
                kb = out_path.stat().st_size / 1024
                generated.append((filename, f"{kb:.1f} KB", p, l.upper()))
                print(f"  [OK] {filename:<38} [{kb:5.1f} KB] ({p} / {l.upper()})")

    # Publicar únicamente el CV oficial en public/cv.pdf (y versión EN en public/cv-en.pdf)
    import shutil
    public_cv_es = root_dir / "public" / "cv.pdf"
    public_cv_en = root_dir / "public" / "cv-en.pdf"
    
    cv_es_src = dist_dir / "Kevin_Garrido_CV_FULLSTACK_ES.pdf"
    cv_en_src = dist_dir / "Kevin_Garrido_CV_FULLSTACK_EN.pdf"

    if cv_es_src.exists():
        shutil.copyfile(cv_es_src, public_cv_es)
        print(f"\n  [PUBLICADO] CV Oficial ES en public/cv.pdf")

    if cv_en_src.exists():
        shutil.copyfile(cv_en_src, public_cv_en)
        print(f"  [PUBLICADO] CV Oficial EN en public/cv-en.pdf")

    print("\n========================================================")
    print(f" Total generados localmente: {len(generated)} PDFs en cv/dist/")
    print("========================================================\n")

if __name__ == "__main__":
    main()
