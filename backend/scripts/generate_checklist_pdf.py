"""Generates the downloadable CPA Firm Offshore Readiness Checklist PDF."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, PageBreak
from reportlab.lib.enums import TA_LEFT

INK = HexColor("#1C3F39")
TERRA = HexColor("#A85A46")
MUTED = HexColor("#4B5563")

OUTPUT = "/app/frontend/public/cpa-offshore-readiness-checklist.pdf"

styles = getSampleStyleSheet()
H1 = ParagraphStyle("H1", parent=styles["Title"], fontName="Times-Roman", fontSize=28, leading=32, textColor=INK, spaceAfter=4)
KICKER = ParagraphStyle("Kicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=TERRA, spaceAfter=6, alignment=TA_LEFT)
H2 = ParagraphStyle("H2", parent=styles["Heading2"], fontName="Times-Roman", fontSize=18, leading=22, textColor=INK, spaceBefore=18, spaceAfter=8)
H3 = ParagraphStyle("H3", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceBefore=10, spaceAfter=4)
BODY = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=10.5, leading=15, textColor=INK, spaceAfter=6)
SMALL = ParagraphStyle("Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED, spaceAfter=6)


def bullet_list(items):
    return ListFlowable(
        [ListItem(Paragraph(it, BODY), leftIndent=10, bulletColor=TERRA) for it in items],
        bulletType="bullet",
        bulletFontName="Helvetica-Bold",
        bulletFontSize=10.5,
        leftIndent=14,
        bulletColor=TERRA,
        bulletDedent=4,
    )


def build():
    doc = SimpleDocTemplate(
        OUTPUT, pagesize=LETTER,
        leftMargin=0.9 * inch, rightMargin=0.9 * inch,
        topMargin=0.9 * inch, bottomMargin=0.9 * inch,
        title="The CPA Firm Offshore Readiness Checklist — Rahul Tax Advisory",
        author="Rahul Tax Advisory",
    )
    story = []

    # Cover
    story += [
        Paragraph("Rahul Tax Advisory · Free Guide", KICKER),
        Paragraph("The CPA Firm Offshore Readiness Checklist", H1),
        Paragraph(
            "A practical, partner-level guide for US CPA firm owners considering offshore tax, "
            "accounting and advisory support — covering readiness, ideal tasks, security, workflow "
            "and how to evaluate the right partner.",
            BODY,
        ),
        Spacer(1, 18),
        Paragraph("What you'll get from this guide", H3),
        bullet_list([
            "A clear yes / no on whether your firm is ready for offshore right now",
            "The 12 tasks most CPA firms safely outsource first",
            "A security & confidentiality checklist your IT lead will approve",
            "A workflow preparation checklist to avoid season-one chaos",
            "A busy season planning guide built around offshore capacity",
            "A vendor scoring rubric for evaluating offshore partners",
        ]),
        PageBreak(),
    ]

    # Section 1
    story += [
        Paragraph("01 · Readiness", KICKER),
        Paragraph("Is your firm ready for offshore support?", H2),
        Paragraph("Score each statement Yes / No. Six or more 'Yes' answers means you're ready.", SMALL),
        bullet_list([
            "We can describe at least one repeatable task we wish we didn't do.",
            "We have a defined review checklist (even if informal).",
            "We use one of CCH Axcess, UltraTax, ProConnect or Drake.",
            "We have a secure document portal (or are willing to adopt one).",
            "We can dedicate 1 partner / manager as a point of contact.",
            "We are open to a small pilot before scaling.",
            "Our team uses a defined client folder structure.",
            "We have prior-year workpapers accessible for context.",
        ]),
        Spacer(1, 8),
        Paragraph("02 · Tasks Ideal for Outsourcing", KICKER),
        Paragraph("Start with these.", H2),
        bullet_list([
            "Form 1040 preparation (individual returns, including Sch C, E, K-1 reconciliations)",
            "Form 1065 partnership preparation and K-1 generation",
            "Form 1120 / 1120-S corporate preparation",
            "Form 990 non-profit preparation",
            "First-level review on staff-prepared returns",
            "Quarterly tax projections and safe-harbor estimates",
            "Bookkeeping and monthly reconciliations in QuickBooks",
            "Tax notice triage and response drafting",
            "Engagement-letter and organizer preparation",
            "Workpaper standardization and tickmarking",
            "Amended return preparation",
            "Off-season cleanup and bookkeeping catch-up",
        ]),
        PageBreak(),
    ]

    # Section 3
    story += [
        Paragraph("03 · Security & Confidentiality", KICKER),
        Paragraph("Security & confidentiality checklist.", H2),
        bullet_list([
            "Signed NDA before any client data is shared",
            "All work performed inside firm-approved environments (no local downloads)",
            "MFA on every system: email, software, document portal",
            "Encrypted document portal (SmartVault, ShareFile, Suralink, etc.)",
            "Background checks / ID verification on offshore staff",
            "Workstation policy — no removable media, locked screen on idle",
            "Audit trail on document access and tax software usage",
            "Annual security review meeting between firm and partner",
        ]),
        Paragraph("04 · Workflow Preparation", KICKER),
        Paragraph("Set yourself up to win in season one.", H2),
        bullet_list([
            "Standardize your client folder structure and document naming",
            "Document your firm's review checklist — even one page is enough",
            "Define what 'review-ready' means at your firm (workpaper standards, tickmarks)",
            "Assign a single point of contact at the firm (not 4 people in parallel)",
            "Agree turnaround SLAs in writing (e.g., 5 business days for 1040)",
            "Use a shared status tracker — TaxDome, Karbon, Liscio, or a simple sheet",
            "Schedule a 15-minute weekly status call during busy season",
            "Plan capacity for surge weeks (last 2 weeks of March, first 2 of April)",
        ]),
        PageBreak(),
    ]

    # Section 4
    story += [
        Paragraph("05 · Busy Season Planning", KICKER),
        Paragraph("A repeatable busy season plan.", H2),
        bullet_list([
            "November: confirm offshore capacity and lock SLAs for the coming season",
            "December: dry-run the document handoff for 5 sample clients",
            "January: ramp begins; first 25 returns prepared and reviewed end-to-end",
            "February: hit weekly throughput targets; weekly status call live",
            "March: peak weeks — surge capacity activated; daily standups if needed",
            "April: extensions filed, post-season retro within 10 days of 4/15",
            "Off-season: amended returns, notices, planning work, training updates",
        ]),
        Paragraph("06 · Evaluating an Offshore Partner", KICKER),
        Paragraph("Scoring rubric — score each 1–5.", H2),
        bullet_list([
            "Direct access to the actual preparer (not just an account manager)",
            "Hands-on experience with your tax software",
            "Form coverage: 1040, 1065, 1120, 1120-S, 990",
            "Documented quality control and review approach",
            "Tax planning capability beyond compliance",
            "Time-zone overlap with US working hours",
            "Pilot / small-scale engagement available",
            "Clear security posture and NDA process",
            "References or anonymized case studies available",
            "Communication discipline (response SLAs, weekly status)",
        ]),
        Spacer(1, 12),
        Paragraph("A score of 40+ out of 50 typically indicates a strong partner.", SMALL),
        Spacer(1, 22),
        Paragraph("Next step", H3),
        Paragraph(
            "Take the Free CPA Capacity Audit at <b>rahultaxadvisory.com/audit</b> — a 15-minute "
            "assessment that maps your firm's specific bottlenecks to an offshore support model.",
            BODY,
        ),
        Paragraph(
            "© Rahul Tax Advisory · General information only — not tax, legal or accounting advice.",
            SMALL,
        ),
    ]

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
