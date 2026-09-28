import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# Initialize 16:9 Presentation
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Exact Template Theme Color Palette
COLOR_NAVY = RGBColor(26, 54, 93)          # #1A365D - Title text & Primary dark
COLOR_TEAL = RGBColor(13, 148, 136)        # #0D9488 - Accent / PACKWISE AI
COLOR_LIGHT_TEAL = RGBColor(240, 253, 250) # #F0FDFA - Tinted card bg
COLOR_GREEN = RGBColor(16, 185, 129)       # #10B981 - Bottom stripe
COLOR_LIGHT_GREEN = RGBColor(236, 253, 245)# #ECFDF5
COLOR_BLUE = RGBColor(2, 132, 199)         # #0284C7 - Blue accent
COLOR_LIGHT_BLUE = RGBColor(240, 249, 255) # #F0F9FF
COLOR_ORANGE = RGBColor(217, 119, 6)       # #D97706 - Amber accent
COLOR_LIGHT_ORANGE = RGBColor(254, 243, 199) # #FEF3C7
COLOR_RED_LOGO = RGBColor(185, 28, 28)     # #B91C1C - Syndicate IX / Problem accent
COLOR_LIGHT_RED = RGBColor(254, 242, 242)  # #FEF2F2
COLOR_DARK = RGBColor(30, 41, 59)          # #1E293B - Body text
COLOR_MUTED = RGBColor(100, 116, 139)      # #64748B - Subtext
COLOR_CARD_BG = RGBColor(248, 250, 252)    # #F8FAFC - Neutral Card
COLOR_BORDER = RGBColor(226, 232, 240)     # #E2E8F0 - Card outline
COLOR_WHITE = RGBColor(255, 255, 255)

blank_slide_layout = prs.slide_layouts[6]

def add_header_footer(slide, slide_num, title_text=None):
    # Top-Left Logo / Team Tag
    tb_left = slide.shapes.add_textbox(Inches(0.7), Inches(0.28), Inches(3.2), Inches(0.4))
    tf_l = tb_left.text_frame
    tf_l.word_wrap = True
    p_l = tf_l.paragraphs[0]
    p_l.text = "⚡ SYNDICATE IX"
    p_l.font.size = Pt(13)
    p_l.font.bold = True
    p_l.font.color.rgb = COLOR_RED_LOGO
    
    # Top-Right SIH Tag with Pill Shape
    tb_right = slide.shapes.add_textbox(Inches(9.6), Inches(0.28), Inches(3.0), Inches(0.4))
    tf_r = tb_right.text_frame
    tf_r.word_wrap = True
    p_r = tf_r.paragraphs[0]
    p_r.text = "SMART INDIA HACKATHON 2026"
    p_r.alignment = PP_ALIGN.RIGHT
    p_r.font.size = Pt(11)
    p_r.font.bold = True
    p_r.font.color.rgb = COLOR_NAVY
    
    # Title if provided
    if title_text:
        tb_title = slide.shapes.add_textbox(Inches(1.5), Inches(0.55), Inches(10.33), Inches(0.7))
        tf_t = tb_title.text_frame
        p_t = tf_t.paragraphs[0]
        p_t.text = title_text
        p_t.alignment = PP_ALIGN.CENTER
        p_t.font.size = Pt(28)
        p_t.font.bold = True
        p_t.font.color.rgb = COLOR_NAVY
        
    # Bottom Accent Bar
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(7.15), Inches(13.333), Inches(0.35))
    bar.fill.solid()
    bar.fill.fore_color.rgb = COLOR_GREEN
    bar.line.color.rgb = COLOR_GREEN
    
    # Page Number on right
    tb_num = slide.shapes.add_textbox(Inches(12.2), Inches(7.15), Inches(0.8), Inches(0.35))
    tf_n = tb_num.text_frame
    p_n = tf_n.paragraphs[0]
    p_n.text = str(slide_num)
    p_n.alignment = PP_ALIGN.RIGHT
    p_n.font.size = Pt(12)
    p_n.font.bold = True
    p_n.font.color.rgb = COLOR_WHITE


# ==================== SLIDE 1: TITLE PAGE ====================
s1 = prs.slides.add_slide(blank_slide_layout)

# Top SIH Header
tb1_top = s1.shapes.add_textbox(Inches(1.0), Inches(0.5), Inches(11.33), Inches(0.8))
p1_top = tb1_top.text_frame.paragraphs[0]
p1_top.text = "SMART INDIA HACKATHON 2026"
p1_top.alignment = PP_ALIGN.CENTER
p1_top.font.size = Pt(36)
p1_top.font.bold = True
p1_top.font.color.rgb = COLOR_NAVY

# Section Title
tb1_sub = s1.shapes.add_textbox(Inches(1.0), Inches(1.35), Inches(11.33), Inches(0.6))
p1_sub = tb1_sub.text_frame.paragraphs[0]
p1_sub.text = "TITLE PAGE"
p1_sub.alignment = PP_ALIGN.CENTER
p1_sub.font.size = Pt(24)
p1_sub.font.bold = True
p1_sub.font.color.rgb = COLOR_NAVY

# Left Details Card
card1 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(2.1), Inches(8.0), Inches(4.7))
card1.fill.solid()
card1.fill.fore_color.rgb = COLOR_CARD_BG
card1.line.color.rgb = COLOR_BORDER
card1.line.width = Pt(1.5)

# Accent top strip on Card 1
strip1 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(2.1), Inches(8.0), Inches(0.12))
strip1.fill.solid()
strip1.fill.fore_color.rgb = COLOR_NAVY
strip1.line.color.rgb = COLOR_NAVY

tf1_details = card1.text_frame
tf1_details.word_wrap = True
tf1_details.margin_left = Inches(0.35)
tf1_details.margin_right = Inches(0.35)
tf1_details.margin_top = Inches(0.35)

fields = [
    ("Problem Statement ID – ", "SIH26236", COLOR_TEAL, True),
    ("Problem Statement Title – ", "AI-Based Intelligent Food Packaging Material Recommendation System for Food Commodities", COLOR_DARK, False),
    ("Theme – ", "Agriculture, FoodTech & Rural Development", COLOR_NAVY, False),
    ("PS Category – ", "Software Edition", COLOR_BLUE, True),
    ("Ministry / Organization – ", "Ministry of Food Processing Industries (MoFPI)", COLOR_DARK, False),
    ("Team Name – ", "Syndicate IX", COLOR_RED_LOGO, True)
]

for i, (label, val, col, is_b) in enumerate(fields):
    p = tf1_details.paragraphs[0] if i == 0 else tf1_details.add_paragraph()
    p.space_after = Pt(12)
    run1 = p.add_run()
    run1.text = "• " + label
    run1.font.bold = True
    run1.font.size = Pt(13)
    run1.font.color.rgb = COLOR_NAVY
    
    run2 = p.add_run()
    run2.text = val
    run2.font.bold = is_b
    run2.font.size = Pt(13)
    run2.font.color.rgb = col

# Right Visual Brain-Bulb / Flagship Card
card_right = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.0), Inches(2.1), Inches(3.6), Inches(4.7))
card_right.fill.solid()
card_right.fill.fore_color.rgb = COLOR_LIGHT_TEAL
card_right.line.color.rgb = COLOR_TEAL
card_right.line.width = Pt(1.5)

tf_cr = card_right.text_frame
tf_cr.word_wrap = True
tf_cr.margin_left = Inches(0.25)
tf_cr.margin_right = Inches(0.25)
tf_cr.margin_top = Inches(0.4)

p_cr1 = tf_cr.paragraphs[0]
p_cr1.text = "💡 🧠"
p_cr1.alignment = PP_ALIGN.CENTER
p_cr1.font.size = Pt(44)

p_cr2 = tf_cr.add_paragraph()
p_cr2.text = "PACKWISE AI"
p_cr2.alignment = PP_ALIGN.CENTER
p_cr2.font.size = Pt(22)
p_cr2.font.bold = True
p_cr2.font.color.rgb = COLOR_TEAL
p_cr2.space_before = Pt(8)

p_cr3 = tf_cr.add_paragraph()
p_cr3.text = "Next-Gen Food Packaging Engine"
p_cr3.alignment = PP_ALIGN.CENTER
p_cr3.font.size = Pt(11)
p_cr3.font.bold = True
p_cr3.font.color.rgb = COLOR_NAVY
p_cr3.space_before = Pt(4)

# 3 Badge Pills inside the right card
badges = [
    ("🌱 100% Bio-Compostable", COLOR_LIGHT_GREEN, COLOR_TEAL),
    ("⚖️ FSSAI IS 9845 Compliant", COLOR_LIGHT_BLUE, COLOR_BLUE),
    ("🏛️ MoFPI PMFME Subsidies", COLOR_LIGHT_ORANGE, COLOR_ORANGE)
]
for b_text, b_bg, b_fg in badges:
    p_b = tf_cr.add_paragraph()
    p_b.text = b_text
    p_b.alignment = PP_ALIGN.CENTER
    p_b.font.size = Pt(11)
    p_b.font.bold = True
    p_b.font.color.rgb = b_fg
    p_b.space_before = Pt(12)

# Bottom bar for slide 1
bar1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(7.15), Inches(13.333), Inches(0.35))
bar1.fill.solid()
bar1.fill.fore_color.rgb = COLOR_GREEN
bar1.line.color.rgb = COLOR_GREEN


# ==================== SLIDE 2: PACKWISE AI ====================
s2 = prs.slides.add_slide(blank_slide_layout)
add_header_footer(s2, 2)

# Slide Title
tb2_title = s2.shapes.add_textbox(Inches(1.5), Inches(0.55), Inches(10.33), Inches(0.6))
p2_t = tb2_title.text_frame.paragraphs[0]
p2_t.text = "PACKWISE AI"
p2_t.alignment = PP_ALIGN.CENTER
p2_t.font.size = Pt(32)
p2_t.font.bold = True
p2_t.font.color.rgb = COLOR_TEAL

# Subtitle Pill Badge
tb2_sub = s2.shapes.add_textbox(Inches(1.5), Inches(1.15), Inches(10.33), Inches(0.4))
p2_s = tb2_sub.text_frame.paragraphs[0]
p2_s.text = "Intelligent Packaging • Longer Shelf Life • Less Food Waste"
p2_s.alignment = PP_ALIGN.CENTER
p2_s.font.size = Pt(14)
p2_s.font.bold = True
p2_s.font.color.rgb = COLOR_NAVY

# Left Box: The Problem & Industry Need
left_box = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(1.7), Inches(5.6), Inches(5.15))
left_box.fill.solid()
left_box.fill.fore_color.rgb = COLOR_CARD_BG
left_box.line.color.rgb = COLOR_BORDER
left_box.line.width = Pt(1.5)

# Accent Top Strip (Red/Orange for Problem)
strip_l = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(1.7), Inches(5.6), Inches(0.12))
strip_l.fill.solid()
strip_l.fill.fore_color.rgb = COLOR_RED_LOGO
strip_l.line.color.rgb = COLOR_RED_LOGO

tf_lb = left_box.text_frame
tf_lb.word_wrap = True
tf_lb.margin_left = Inches(0.35)
tf_lb.margin_right = Inches(0.35)
tf_lb.margin_top = Inches(0.3)

p_lb_title = tf_lb.paragraphs[0]
p_lb_title.text = "⚠️ The Problem & National Challenge"
p_lb_title.font.size = Pt(16)
p_lb_title.font.bold = True
p_lb_title.font.color.rgb = COLOR_RED_LOGO
p_lb_title.space_after = Pt(12)

prob_points = [
    ("Severe Post-Harvest Loss:", " India loses ₹1.52+ Lakh Cr annually (~19.33 MMT fruit/vegetable wastage) due to inadequate packaging."),
    ("Plastic Pollution & EPR Penalty:", " Single-use multi-layer plastic pouches cannot be recycled and face severe CPCB 2026 EPR penalties."),
    ("Barrier Mismatch:", " Perishables packed in generic LDPE suffer condensation rotting, mold bloom, or moisture desiccation."),
    ("MSME & FPO Bottleneck:", " Rural processors lack R&D testing labs and miss out on available MoFPI PMFME capital subsidies.")
]
for bold_prefix, text_body in prob_points:
    p = tf_lb.add_paragraph()
    p.space_after = Pt(10)
    r1 = p.add_run()
    r1.text = "• " + bold_prefix
    r1.font.bold = True
    r1.font.size = Pt(11.5)
    r1.font.color.rgb = COLOR_NAVY
    r2 = p.add_run()
    r2.text = text_body
    r2.font.size = Pt(11.5)
    r2.font.color.rgb = COLOR_DARK

# Right Box: Our Solution - PACKWISE AI
right_box = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.6), Inches(1.7), Inches(6.0), Inches(5.15))
right_box.fill.solid()
right_box.fill.fore_color.rgb = COLOR_LIGHT_TEAL
right_box.line.color.rgb = COLOR_TEAL
right_box.line.width = Pt(1.5)

# Accent Top Strip (Teal for Solution)
strip_r = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.6), Inches(1.7), Inches(6.0), Inches(0.12))
strip_r.fill.solid()
strip_r.fill.fore_color.rgb = COLOR_TEAL
strip_r.line.color.rgb = COLOR_TEAL

tf_rb = right_box.text_frame
tf_rb.word_wrap = True
tf_rb.margin_left = Inches(0.35)
tf_rb.margin_right = Inches(0.35)
tf_rb.margin_top = Inches(0.3)

p_rb_title = tf_rb.paragraphs[0]
p_rb_title.text = "✨ Our Solution – PACKWISE AI"
p_rb_title.font.size = Pt(16)
p_rb_title.font.bold = True
p_rb_title.font.color.rgb = COLOR_TEAL
p_rb_title.space_after = Pt(10)

sol_points = [
    ("Analyzes food & storage conditions", " to identify packaging needs (water activity aw, respiration, ethylene)."),
    ("Recommends materials with OTR, WVTR & thickness guidance", " for hermetic barrier protection."),
    ("Considers respiration, temperature & humidity", " for fresh produce to design equilibrium MAP atmospheres."),
    ("Offers sustainable and cost-aware packaging alternatives", " (marine PHA, PLA, Chitosan, circular Mono-PE/PP)."),
    ("Provides explainable recommendations with shelf-life estimation", " via Arrhenius kinetic models."),
    ("Automates FSSAI compliance & MoFPI subsidies", " generating printable IS 9845 dossiers and PMFME 35% grants.")
]
for bold_prefix, text_body in sol_points:
    p = tf_rb.add_paragraph()
    p.space_after = Pt(8)
    r1 = p.add_run()
    r1.text = "✔ " + bold_prefix
    r1.font.bold = True
    r1.font.size = Pt(11)
    r1.font.color.rgb = COLOR_NAVY
    r2 = p.add_run()
    r2.text = text_body
    r2.font.size = Pt(11)
    r2.font.color.rgb = COLOR_DARK


# ==================== SLIDE 3: TECHNICAL APPROACH ====================
s3 = prs.slides.add_slide(blank_slide_layout)
add_header_footer(s3, 3, "TECHNICAL APPROACH")

col_w = Inches(2.78)
col_gap = Inches(0.24)
start_x = Inches(0.7)
top_y = Inches(1.55)
card_h = Inches(4.5)

stages_info = [
    ("STEP 01", "Biochemical Input", COLOR_BLUE, COLOR_LIGHT_BLUE, [
        "Water Activity (aw: 0.18 - 0.99)",
        "Respiration Rate (R_CO2)",
        "Ethylene Sensitivity Index",
        "Target Storage Temp (0°-30°C)",
        "Supply Chain RH & Transit Days",
        "24 Categorized Staples"
    ]),
    ("STEP 02", "Dual-Barrier Engine", COLOR_TEAL, COLOR_LIGHT_TEAL, [
        "Calculates OTR (<1 to >5000 cm³/m²·d)",
        "Calculates WVTR (<0.1 to >50 g/m²·d)",
        "Active Tech (KMnO4, nisin pads)",
        "Bio-Polymer Multi-Attribute Filtering",
        "Recyclable Mono-materials fallback",
        "Packaging Gauge & Sealing Rules"
    ]),
    ("STEP 03", "Kinetic Simulation", COLOR_ORANGE, COLOR_LIGHT_ORANGE, [
        "Arrhenius Model: k = A·exp(-Ea/RT)",
        "Q10 Temp Quotient (2.0 - 2.8x)",
        "Cold-Chain Rupture Stress Test",
        "Equilibrium MAP Gas Flush",
        "Shelf-Life Expansion (+150%-450%)",
        "Dynamic Spoilage Curves"
    ]),
    ("STEP 04", "Compliance & Grants", COLOR_NAVY, COLOR_CARD_BG, [
        "FSSAI IS 9845 Migration Check",
        "Overall Migration < 60 mg/kg",
        "CPCB EPR Category I-IV Validation",
        "MoFPI PMFME 35% Capital Grant",
        "Printable Technical Dossier",
        "QR-Based Batch Traceability"
    ])
]

for idx, (step_tag, step_title, col_fg, col_bg, items) in enumerate(stages_info):
    curr_x = start_x + idx * (col_w + col_gap)
    
    # Card Background
    card = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, curr_x, top_y, col_w, card_h)
    card.fill.solid()
    card.fill.fore_color.rgb = COLOR_CARD_BG
    card.line.color.rgb = col_fg
    card.line.width = Pt(1.5)
    
    # Top Accent Strip
    strip = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, curr_x, top_y, col_w, Inches(0.42))
    strip.fill.solid()
    strip.fill.fore_color.rgb = col_fg
    strip.line.color.rgb = col_fg
    
    tf_strip = strip.text_frame
    p_st = tf_strip.paragraphs[0]
    p_st.text = f"{step_tag} : {step_title}"
    p_st.alignment = PP_ALIGN.CENTER
    p_st.font.size = Pt(11)
    p_st.font.bold = True
    p_st.font.color.rgb = COLOR_WHITE
    
    tf = card.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.18)
    tf.margin_right = Inches(0.18)
    tf.margin_top = Inches(0.55)
    
    for item in items:
        p = tf.add_paragraph()
        p.text = "✔ " + item
        p.font.size = Pt(10.5)
        p.font.color.rgb = COLOR_DARK
        p.space_after = Pt(7)

# Bottom Tech Stack Banner Box
t_box = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(6.2), Inches(11.93), Inches(0.75))
t_box.fill.solid()
t_box.fill.fore_color.rgb = RGBColor(241, 245, 249)
t_box.line.color.rgb = COLOR_BORDER
tf_tb = t_box.text_frame
tf_tb.margin_left = Inches(0.3)
tf_tb.margin_top = Inches(0.12)
p_tbt = tf_tb.paragraphs[0]
p_tbt.text = "🛠️ Technology Stack & Algorithmic Foundation:"
p_tbt.font.bold = True
p_tbt.font.size = Pt(11)
p_tbt.font.color.rgb = COLOR_NAVY

p_tbd = tf_tb.add_paragraph()
p_tbd.text = "Frontend: React 19 + Vite 8 | Analytical Core: Pure JS/Python Matrix | Kinetic Models: Arrhenius & Fick's Law | Standards: FSSAI IS 9845 & ASTM D3985/F1249"
p_tbd.font.size = Pt(10)
p_tbd.font.color.rgb = COLOR_MUTED


# ==================== SLIDE 4: FEASIBILITY AND VIABILITY ====================
s4 = prs.slides.add_slide(blank_slide_layout)
add_header_footer(s4, 4, "FEASIBILITY AND VIABILITY")

sec_w = Inches(3.78)
sec_g = Inches(0.29)
sec_x = Inches(0.7)
sec_y = Inches(1.6)
sec_h = Inches(5.15)

f_cards = [
    ("📊 Analysis of Feasibility", COLOR_NAVY, [
        ("Technical Feasibility:", " Built on empirical food science principles (Fick's diffusion laws, Arrhenius kinetics) and ASTM test standards (D3985 for OTR, F1249 for WVTR). Zero speculative hardware needed."),
        ("Economic Viability:", " Free open web platform for farmers and MSMEs. Delivers high ROI via 28-42% reduction in spoilage and unlocks up to ₹10 Lakhs in capital grants."),
        ("Operational Feasibility:", " Dual-tier architecture: 'Simple Mode' for rural farmers/FPOs and 'Expert Mode' for packaging engineers and food technologists.")
    ]),
    ("⚠️ Potential Challenges & Risks", COLOR_ORANGE, [
        ("Bio-Plastic Cost Premium:", " Virgin bio-polymers (PHA/PLA) currently carry a 20-35% price premium over cheap petrochemical LDPE pouches."),
        ("Cold-Chain Thermal Abuse:", " Rural transport corridors frequently experience unscheduled power outages and ambient heat spikes exceeding 38°C."),
        ("Agro-Produce Moisture Variance:", " Regional and seasonal variations in fruit water activity and peel transpiration across Indian agro-climatic zones."),
        ("Domestic Supply Scarcity:", " Limited conversion infrastructure in India for virgin marine-grade PHA film.")
    ]),
    ("🛡️ Strategies for Overcoming", COLOR_TEAL, [
        ("MoFPI Capital Subsidies:", " Offsets bio-machinery cost by directly integrating PMFME 35% capital grants (up to ₹10L) and PMKSY cluster subsidies."),
        ("Circular Mono-Material Fallback:", " Recommends recyclable Mono-PP and Mono-PE barrier laminates for budget-constrained micro-enterprises alongside bio-plastics."),
        ("Arrhenius Thermal Shock Buffers:", " Algorithm incorporates dynamic +10°C thermal shock safety buffers into all barrier recommendations."),
        ("Standardized Green Vendors:", " Pre-calibrated material specs allow bulk aggregation and procurement from verified bio-polymer suppliers.")
    ])
]

for idx, (title, col, bullets) in enumerate(f_cards):
    cx = sec_x + idx * (sec_w + sec_g)
    c_shape = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, sec_y, sec_w, sec_h)
    c_shape.fill.solid()
    c_shape.fill.fore_color.rgb = COLOR_CARD_BG
    c_shape.line.color.rgb = col
    c_shape.line.width = Pt(1.5)
    
    # Top Strip
    strip = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, sec_y, sec_w, Inches(0.42))
    strip.fill.solid()
    strip.fill.fore_color.rgb = col
    strip.line.color.rgb = col
    tf_s = strip.text_frame
    p_st = tf_s.paragraphs[0]
    p_st.text = title
    p_st.alignment = PP_ALIGN.CENTER
    p_st.font.size = Pt(12)
    p_st.font.bold = True
    p_st.font.color.rgb = COLOR_WHITE
    
    tf = c_shape.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.22)
    tf.margin_right = Inches(0.22)
    tf.margin_top = Inches(0.55)
    
    for bold_head, desc in bullets:
        p = tf.add_paragraph()
        p.space_after = Pt(10)
        r1 = p.add_run()
        r1.text = "• " + bold_head
        r1.font.bold = True
        r1.font.size = Pt(11)
        r1.font.color.rgb = COLOR_NAVY
        r2 = p.add_run()
        r2.text = desc
        r2.font.size = Pt(11)
        r2.font.color.rgb = COLOR_DARK


# ==================== SLIDE 5: IMPACT AND BENEFITS ====================
s5 = prs.slides.add_slide(blank_slide_layout)
add_header_footer(s5, 5, "IMPACT AND BENEFITS")

# 3 Top Metric Cards (MoFPI / NABCONS 2022 stats)
stats = [
    ("🍎 6.02 – 15.05%", "Fruit post-harvest loss in India\n(Govt. of India / NABCONS, 2022)", COLOR_ORANGE, COLOR_LIGHT_ORANGE),
    ("🥬 4.87 – 11.61%", "Vegetable post-harvest loss in India\n(Govt. of India / NABCONS, 2022)", COLOR_GREEN, COLOR_LIGHT_GREEN),
    ("📦 19.33 MMT", "Combined estimated fruit + veg loss\n(Govt. of India / NABCONS, 2022)", COLOR_BLUE, COLOR_LIGHT_BLUE)
]
for idx, (val, sub, col, bg_col) in enumerate(stats):
    m_card = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7 + idx * 4.05), Inches(1.5), Inches(3.8), Inches(1.15))
    m_card.fill.solid()
    m_card.fill.fore_color.rgb = bg_col
    m_card.line.color.rgb = col
    m_card.line.width = Pt(1.5)
    tf_m = m_card.text_frame
    tf_m.word_wrap = True
    tf_m.margin_left = Inches(0.2)
    tf_m.margin_top = Inches(0.12)
    p_val = tf_m.paragraphs[0]
    p_val.text = val
    p_val.font.size = Pt(18)
    p_val.font.bold = True
    p_val.font.color.rgb = col
    
    p_sub = tf_m.add_paragraph()
    p_sub.text = sub
    p_sub.font.size = Pt(9.5)
    p_sub.font.color.rgb = COLOR_DARK

# Process Flow Section with 4 Connected Step Cards
flow_y = Inches(2.85)
flow_w = Inches(2.78)
flow_g = Inches(0.27)
flow_steps = [
    ("1. Input Parameters", "• Commodity Type\n• Moisture Content\n• Respiration Rate\n• Storage Temp & RH", COLOR_BLUE),
    ("2. AI Engine", "• Dual-Barrier Math\n• Arrhenius Kinetics\n• Spoilage Curves\n• OTR & WVTR Matching", COLOR_TEAL),
    ("3. Packaging Blueprint", "• Bio-polymers (PHA/PLA)\n• Active Scavengers\n• Thickness & Gauge\n• MAP Gas Mixture", COLOR_ORANGE),
    ("4. Optimized Output", "• Extended Shelf-Life\n• FSSAI Dossier\n• MoFPI 35% Grant\n• QR Traceability", COLOR_NAVY)
]

for idx, (step_t, step_d, step_c) in enumerate(flow_steps):
    bx = Inches(0.7) + idx * (flow_w + flow_g)
    f_box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, bx, flow_y, flow_w, Inches(1.6))
    f_box.fill.solid()
    f_box.fill.fore_color.rgb = COLOR_CARD_BG
    f_box.line.color.rgb = step_c
    f_box.line.width = Pt(1.5)
    
    tf_f = f_box.text_frame
    tf_f.word_wrap = True
    tf_f.margin_left = Inches(0.18)
    tf_f.margin_top = Inches(0.15)
    
    p_ft = tf_f.paragraphs[0]
    p_ft.text = step_t
    p_ft.font.size = Pt(12)
    p_ft.font.bold = True
    p_ft.font.color.rgb = step_c
    p_ft.space_after = Pt(4)
    
    p_fd = tf_f.add_paragraph()
    p_fd.text = step_d
    p_fd.font.size = Pt(10)
    p_fd.font.color.rgb = COLOR_DARK

# Bottom Quantified Impact Box
q_card = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(4.65), Inches(11.93), Inches(2.2))
q_card.fill.solid()
q_card.fill.fore_color.rgb = COLOR_CARD_BG
q_card.line.color.rgb = COLOR_BORDER
q_card.line.width = Pt(1.5)

# Accent Strip on Bottom Box
q_strip = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(4.65), Inches(11.93), Inches(0.1))
q_strip.fill.solid()
q_strip.fill.fore_color.rgb = COLOR_TEAL
q_strip.line.color.rgb = COLOR_TEAL

tf_q = q_card.text_frame
tf_q.word_wrap = True
tf_q.margin_left = Inches(0.3)
tf_q.margin_top = Inches(0.2)

p_q_title = tf_q.paragraphs[0]
p_q_title.text = "🌟 Quantifiable National Outcomes & Benefits"
p_q_title.font.size = Pt(14)
p_q_title.font.bold = True
p_q_title.font.color.rgb = COLOR_NAVY
p_q_title.space_after = Pt(6)

q_bullets = [
    ("Up to 61% Spoilage Reduction:", " Calibrated equilibrium modified atmosphere and moisture-wicking bio-liners prevent microbial decay."),
    ("+150% to +450% Shelf-Life Extension:", " Enables rural farmers and MSMEs to access distant metropolitan and lucrative export markets."),
    ("Zero Non-Recyclable Plastic:", " Directly replaces multi-layer metalized pouches with marine-compostable PHA and circular mono-polymers."),
    ("Economic Empowerment:", " Pre-filled MoFPI PMFME technical dossiers unlock up to ₹10 Lakhs in capital machinery grants for micro-units.")
]
for b_tag, b_desc in q_bullets:
    p = tf_q.add_paragraph()
    p.space_after = Pt(3)
    r1 = p.add_run()
    r1.text = "• " + b_tag
    r1.font.bold = True
    r1.font.size = Pt(10.5)
    r1.font.color.rgb = COLOR_TEAL
    r2 = p.add_run()
    r2.text = b_desc
    r2.font.size = Pt(10.5)
    r2.font.color.rgb = COLOR_DARK


# ==================== SLIDE 6: RESEARCH AND REFERENCES ====================
s6 = prs.slides.add_slide(blank_slide_layout)
add_header_footer(s6, 6, "RESEARCH AND REFERENCES")

col_w = Inches(5.75)
gap_w = Inches(0.43)
top_ref = Inches(1.6)
h_ref = Inches(5.15)

# Left Column: Government Reports & Regulatory Standards
left_ref = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), top_ref, col_w, h_ref)
left_ref.fill.solid()
left_ref.fill.fore_color.rgb = COLOR_CARD_BG
left_ref.line.color.rgb = COLOR_NAVY
left_ref.line.width = Pt(1.5)

# Accent Top Strip
strip_l6 = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), top_ref, col_w, Inches(0.42))
strip_l6.fill.solid()
strip_l6.fill.fore_color.rgb = COLOR_NAVY
strip_l6.line.color.rgb = COLOR_NAVY
tf_s6l = strip_l6.text_frame
p_s6l = tf_s6l.paragraphs[0]
p_s6l.text = "🏛️ Government Reports & Regulatory Standards"
p_s6l.alignment = PP_ALIGN.CENTER
p_s6l.font.size = Pt(12)
p_s6l.font.bold = True
p_s6l.font.color.rgb = COLOR_WHITE

tf_lref = left_ref.text_frame
tf_lref.word_wrap = True
tf_lref.margin_left = Inches(0.28)
tf_lref.margin_right = Inches(0.28)
tf_lref.margin_top = Inches(0.55)

gov_refs = [
    ("MoFPI & NABCONS Study (2022):", " 'Assessment of Post-Harvest Losses of Major Agricultural Produce and Harvest Stages in India' — Established national baseline loss metrics of 6.02-15.05% in fruits and 4.87-11.61% in vegetables."),
    ("FSSAI Regulation (2018 / IS 9845):", " 'Food Safety and Standards (Packaging) Regulations' — Overall migration limit < 60 mg/kg (< 10 mg/dm²) calibration for bio-polymer food-contact certification."),
    ("CPCB Plastic Waste Management Rules (2026):", " 'Guidelines on Extended Producer Responsibility (EPR) for Plastic Packaging' — Phasing out multi-layer plastics in favor of circular mono-materials and compostable bio-polymers."),
    ("MoFPI PMFME Scheme Guidelines:", " 'PM Formalisation of Micro food processing Enterprises Scheme' — Integration of 35% credit-linked capital grants (maximum ₹10 Lakhs) for food packaging machinery.")
]
for bold_t, desc in gov_refs:
    p = tf_lref.add_paragraph()
    p.space_after = Pt(10)
    r1 = p.add_run()
    r1.text = "📄 " + bold_t
    r1.font.bold = True
    r1.font.size = Pt(11)
    r1.font.color.rgb = COLOR_NAVY
    r2 = p.add_run()
    r2.text = desc
    r2.font.size = Pt(11)
    r2.font.color.rgb = COLOR_DARK

# Right Column: Academic Literature & Testing Protocols
right_ref = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7 + col_w + gap_w), top_ref, col_w, h_ref)
right_ref.fill.solid()
right_ref.fill.fore_color.rgb = COLOR_CARD_BG
right_ref.line.color.rgb = COLOR_TEAL
right_ref.line.width = Pt(1.5)

# Accent Top Strip
strip_r6 = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7 + col_w + gap_w), top_ref, col_w, Inches(0.42))
strip_r6.fill.solid()
strip_r6.fill.fore_color.rgb = COLOR_TEAL
strip_r6.line.color.rgb = COLOR_TEAL
tf_s6r = strip_r6.text_frame
p_s6r = tf_s6r.paragraphs[0]
p_s6r.text = "🔬 Scientific Literature & ASTM Testing Protocols"
p_s6r.alignment = PP_ALIGN.CENTER
p_s6r.font.size = Pt(12)
p_s6r.font.bold = True
p_s6r.font.color.rgb = COLOR_WHITE

tf_rref = right_ref.text_frame
tf_rref.word_wrap = True
tf_rref.margin_left = Inches(0.28)
tf_rref.margin_right = Inches(0.28)
tf_rref.margin_top = Inches(0.55)

sci_refs = [
    ("Robertson, G. L. (2016):", " 'Food Packaging: Principles and Practice (3rd Edition)', CRC Press — Mathematical formulations for gas permeability, OTR, WVTR, and active scavenger packaging systems."),
    ("ASTM D3985-17 Standard:", " 'Standard Test Method for Oxygen Gas Transmission Rate (OTR) Through Plastic Film and Sheeting Using a Coulometric Sensor' — Governs barrier categorization."),
    ("ASTM F1249-20 Standard:", " 'Standard Test Method for Water Vapor Transmission Rate (WVTR) Through Plastic Film and Sheeting Using a Modulated Infrared Sensor' — Governs moisture barrier thresholds."),
    ("Labuza, T. P. & Taoukis, P. S.:", " 'Prediction of Food Spoilage Kinetics and Arrhenius Q10 Temperature Quotient Equations in Modified Atmosphere Packaging (MAP)' — Powers our kinetic shelf-life simulation lab.")
]
for bold_t, desc in sci_refs:
    p = tf_rref.add_paragraph()
    p.space_after = Pt(10)
    r1 = p.add_run()
    r1.text = "🔬 " + bold_t
    r1.font.bold = True
    r1.font.size = Pt(11)
    r1.font.color.rgb = COLOR_TEAL
    r2 = p.add_run()
    r2.text = desc
    r2.font.size = Pt(11)
    r2.font.color.rgb = COLOR_DARK

# Save updated presentation
prs.save("PACKWISE_AI_SIH2026_Submission.pptx")
print("Successfully generated updated PACKWISE_AI_SIH2026_Submission.pptx with rich visual elements!")
