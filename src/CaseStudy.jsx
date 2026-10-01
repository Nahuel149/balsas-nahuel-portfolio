import { ArrowLeft, ArrowRight, ExternalLink, Mail } from "lucide-react";
import { caseStudies } from "./case-studies.js";
import { basePath, locales, pagePath, profileCopy } from "./site.js";

export function LanguageLinks({ language, slug = "" }) {
  return <div className="languageSwitch" aria-label={language === "ja" ? "言語を選択" : language === "es" ? "Elegir idioma" : "Choose language"}>
    {locales.map((locale) => <a key={locale} href={pagePath(locale, slug)} hrefLang={locale} lang={locale}
      className={locale === language ? "isActive" : ""} aria-current={locale === language ? "page" : undefined}>
      {locale === "ja" ? "日本語" : locale.toUpperCase()}
    </a>)}
  </div>;
}

export default function CaseStudy({ language, slug }) {
  const project = caseStudies.find((item) => item.slug === slug);
  const labels = profileCopy[language];
  const copy = project.copy[language];
  return <>
    <a className="skipLink" href="#case-content">{language === "ja" ? "本文へ" : language === "es" ? "Ir al contenido" : "Skip to content"}</a>
    <header className="siteHeader caseHeader">
      <a className="brand" href={pagePath(language)}><span className="brandMark">NB</span><span>Nahuel Balsas</span></a>
      <LanguageLinks language={language} slug={slug} />
    </header>
    <main id="case-content" className="casePage">
      <a className="textLink" href={`${pagePath(language)}#work`}><ArrowLeft size={18} />{labels.back}</a>
      <h1>{project.title}</h1>
      <p className="caseLead">{copy.summary}</p>
      <dl className="caseRole"><dt>{labels.roleLabel}</dt><dd>{copy.role}</dd></dl>
      <ul className="tagList">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      {project.image && <figure className="caseScreenshot"><img src={`${basePath}${project.image}`} alt={`${project.title}: ${language === "ja" ? "公開画面" : language === "es" ? "interfaz pública" : "public interface"}`} width="1440" height="900" /><figcaption>{project.title} · 2026-10-01</figcaption></figure>}
      <div className="caseSections">{copy.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</div>
      <section className="caseReferences"><h2>{labels.evidence}</h2>
        {project.references.map((reference) => <a className="textLink" key={reference.href} href={reference.href} target="_blank" rel="noreferrer">{reference.label}<ExternalLink size={16} /></a>)}
      </section>
      <section className="relatedCases"><h2>{labels.more}</h2>
        {caseStudies.filter((item) => item.slug !== slug).map((item) => <a key={item.slug} href={pagePath(language, item.slug)}>{item.title}<ArrowRight size={18} /></a>)}
      </section>
      <a className="primaryButton" href={`mailto:nahuelbalsas199@gmail.com?subject=${encodeURIComponent(`${project.title} — portfolio enquiry`)}`}><Mail size={18} />{labels.contact}</a>
    </main>
  </>;
}
