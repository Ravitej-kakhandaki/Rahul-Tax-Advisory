"""Generates The CPA Firm Capacity & Growth Playbook (PDF)."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, PageBreak, Table, TableStyle,
)
from reportlab.lib.enums import TA_LEFT

INK = HexColor("#1C3F39")
TERRA = HexColor("#A85A46")
MUTED = HexColor("#4B5563")
PAPER = HexColor("#F9F6F0")

OUTPUT = "/app/frontend/public/cpa-firm-capacity-growth-playbook.pdf"

styles = getSampleStyleSheet()
COVER_KICKER = ParagraphStyle("CK", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=TERRA, spaceAfter=10, alignment=TA_LEFT)
COVER_H1 = ParagraphStyle("CH1", parent=styles["Title"], fontName="Times-Roman", fontSize=34, leading=38, textColor=INK, spaceAfter=10)
COVER_SUB = ParagraphStyle("CSUB", parent=styles["Normal"], fontName="Times-Italic", fontSize=14, leading=20, textColor=INK, spaceAfter=30)
KICKER = ParagraphStyle("Kicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=TERRA, spaceAfter=6, alignment=TA_LEFT)
H1 = ParagraphStyle("H1", parent=styles["Title"], fontName="Times-Roman", fontSize=26, leading=30, textColor=INK, spaceAfter=4, alignment=TA_LEFT)
H2 = ParagraphStyle("H2", parent=styles["Heading2"], fontName="Times-Roman", fontSize=18, leading=22, textColor=INK, spaceBefore=14, spaceAfter=6)
H3 = ParagraphStyle("H3", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceBefore=10, spaceAfter=4)
BODY = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=10.5, leading=15, textColor=INK, spaceAfter=6)
SMALL = ParagraphStyle("Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED, spaceAfter=6)
CTA = ParagraphStyle("CTA", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=12, leading=16, textColor=PAPER, alignment=TA_LEFT)


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(it, BODY), leftIndent=10, bulletColor=TERRA) for it in items],
        bulletType="bullet",
        bulletFontName="Helvetica-Bold",
        bulletFontSize=10.5,
        leftIndent=14,
        bulletColor=TERRA,
        bulletDedent=4,
    )


def cta_block(text):
    t = Table([[Paragraph(text, CTA)]], colWidths=[5.6 * inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), INK),
        ("TEXTCOLOR", (0, 0), (-1, -1), PAPER),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 14),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
    ]))
    return t


def build():
    doc = SimpleDocTemplate(
        OUTPUT, pagesize=LETTER,
        leftMargin=0.9 * inch, rightMargin=0.9 * inch,
        topMargin=0.9 * inch, bottomMargin=0.9 * inch,
        title="The CPA Firm Capacity & Growth Playbook — Rahul Tax Advisory",
        author="Rahul G Sataraddi · Rahul Tax Advisory",
    )
    story = []

    # ---------- Page 1: Cover ----------
    story += [
        Paragraph("Rahul Tax Advisory · Free Guide", COVER_KICKER),
        Spacer(1, 90),
        Paragraph("The CPA Firm Capacity &amp; Growth Playbook", COVER_H1),
        Paragraph(
            "A practical guide for CPA firms looking to increase capacity, improve efficiency, "
            "and create more opportunities for advisory growth.",
            COVER_SUB,
        ),
        Spacer(1, 110),
        Paragraph("By Rahul G Sataraddi", BODY),
        Paragraph("US Tax Professional &nbsp;|&nbsp; CPA Candidate", BODY),
        Paragraph("Nearly 4 Years Supporting US CPA Firms", BODY),
        PageBreak(),
    ]

    # ---------- Page 2: Capacity Assessment ----------
    story += [
        Paragraph("Page 2 · Self-Assessment", KICKER),
        Paragraph("Is Your Firm Ready to Scale?", H1),
        Paragraph("CPA Capacity Assessment", H2),
        Paragraph(
            "A simple self-assessment to gauge where your firm stands today. The more 'Yes' answers, "
            "the bigger the opportunity to free up partner time and create capacity for growth.",
            BODY,
        ),
        Spacer(1, 10),
        bullets([
            "Are partners spending too much time on compliance work?",
            "Are busy season deadlines creating capacity pressure?",
            "Is your team spending less time on high-value advisory services?",
            "Are extension and post-season projects slowing growth?",
            "Are workflows documented and efficient?",
            "Do reviewers have enough hours to maintain quality standards?",
            "Is the firm losing time to bookkeeping cleanup and notice resolution?",
        ]),
        Spacer(1, 8),
        Paragraph(
            "<i>Four or more 'Yes' answers usually indicates a meaningful capacity opportunity worth exploring.</i>",
            SMALL,
        ),
        PageBreak(),
    ]

    # ---------- Page 3: High-Impact Areas ----------
    story += [
        Paragraph("Page 3 · Where Capacity Comes From", KICKER),
        Paragraph("High-Impact Areas to Create Capacity", H1),

        Paragraph("Tax Compliance", H2),
        bullets([
            "Individual tax engagements",
            "Partnership tax engagements",
            "Corporate &amp; S-Corporation engagements",
            "Non-profit tax engagements",
            "Extensions and amended returns",
        ]),
        Paragraph("Bookkeeping &amp; Cleanup", H2),
        bullets([
            "Monthly bookkeeping",
            "Catch-up bookkeeping",
            "Historical cleanup projects",
            "Reconciliations",
            "Tax-ready financial records",
        ]),
        Paragraph("Tax Planning &amp; Advisory", H2),
        bullets([
            "Tax projections",
            "Scenario analysis",
            "Research support",
            "Advisory documentation",
        ]),
        PageBreak(),
    ]

    # ---------- Page 4: Quality & Workflow Excellence ----------
    story += [
        Paragraph("Page 4 · Quality &amp; Workflow Excellence", KICKER),
        Paragraph("A Successful CPA Firm Partnership Is Built On:", H1),
        Spacer(1, 10),
        bullets([
            "Alignment with your firm's workflow",
            "Review-ready documentation",
            "Clear communication",
            "Confidentiality and professional standards",
            "Consistent turnaround expectations",
            "Reliable year-round collaboration",
        ]),
        Spacer(1, 14),
        Paragraph("The quality bar that matters", H3),
        Paragraph(
            "The right partnership doesn't simply add hours — it adds the right hours. Documentation "
            "matched to your QC checklist. Workpapers a partner can sign without a second loop. "
            "Communication on the cadence your firm runs on. That's what makes outside capacity "
            "feel internal.",
            BODY,
        ),
        PageBreak(),
    ]

    # ---------- Page 5: Flexible Engagement Models ----------
    story += [
        Paragraph("Page 5 · Engagement Options", KICKER),
        Paragraph("Flexible Engagement Models", H1),

        Paragraph("Seasonal Tax Support", H2),
        Paragraph(
            "Designed for firms needing additional capacity during peak tax periods.",
            BODY,
        ),
        Paragraph("Year-Round Tax &amp; Advisory Support", H2),
        Paragraph(
            "Ongoing collaboration across tax, accounting, bookkeeping, and advisory needs.",
            BODY,
        ),
        Paragraph("CPA Firm Outsourcing &amp; Offshore Staffing", H2),
        Paragraph(
            "Dedicated tax and accounting professionals aligned with your firm's workflow and quality standards.",
            BODY,
        ),
        Paragraph("Project-Based Support", H2),
        Paragraph(
            "Ideal for special projects, cleanup engagements, notices, and specific client needs.",
            BODY,
        ),
        Spacer(1, 12),
        Paragraph(
            "Every CPA firm has unique capacity requirements and growth objectives. Engagement "
            "models are designed to provide flexible professional support with transparent scoping, "
            "operational efficiency, and long-term value.",
            SMALL,
        ),
        PageBreak(),
    ]

    # ---------- Page 6: Why CPA Firms Partner ----------
    story += [
        Paragraph("Page 6 · Why Partner With Rahul Tax Advisory", KICKER),
        Paragraph("A boutique partner for long-term CPA firm partnerships.", H1),
        Spacer(1, 10),
        bullets([
            "Nearly 4 years supporting US CPA firms",
            "Experience across tax, bookkeeping, and advisory engagements",
            "CPA Candidate (REG &amp; TCP cleared)",
            "Direct communication and accountability",
            "Flexible engagement structures",
            "Commitment to quality and confidentiality",
            "Technology-adaptive — fits into your existing systems and workflows",
        ]),
        Spacer(1, 20),
        Paragraph(
            "<i>\"My mission is to help CPA firms increase capacity, maintain exceptional quality, "
            "and create more opportunities to focus on the advisory relationships that drive "
            "long-term growth.\"</i>",
            BODY,
        ),
        Paragraph("— Rahul G Sataraddi, Founder", SMALL),
        PageBreak(),
    ]

    # ---------- Page 7: Next Step CTA ----------
    story += [
        Paragraph("Page 7 · Next Step", KICKER),
        Paragraph("Discover Your Firm's Capacity Opportunities", H1),
        Paragraph(
            "Receive a personalized CPA Capacity Assessment that identifies:",
            BODY,
        ),
        bullets([
            "Capacity improvement opportunities",
            "Recommended engagement approach",
            "Workflow enhancement ideas",
            "Busy season readiness insights",
        ]),
        Spacer(1, 18),
        cta_block("Schedule Your Complimentary CPA Growth Conversation"),
        Spacer(1, 12),
        Paragraph("rahultaxadvisory.com/book &nbsp;·&nbsp; rahultaxadvisory.com/audit", BODY),
        Spacer(1, 30),
        Paragraph(
            "© Rahul Tax Advisory · General information only — not tax, legal or accounting advice.",
            SMALL,
        ),
    ]

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
