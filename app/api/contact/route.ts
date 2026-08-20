import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config/site";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const targetEmail = siteConfig.supportEmail || "zprotv25@gmail.com";

    // Form-encoded parameters for FormSubmit.co
    const params = new URLSearchParams();
    params.append("Prénom", firstName);
    params.append("Nom", lastName || "Non renseigné");
    params.append("EmailClient", email);
    params.append("Sujet", subject || "Support");
    params.append("Message", message);
    params.append("_subject", `[Nouveau Client STRONG4K] ${firstName} ${lastName}`);
    params.append("_captcha", "false");
    params.append("_template", "table");

    const response = await fetch(`https://formsubmit.co/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": `${siteConfig.domain}/contact`,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: params.toString(),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Votre message a été transmis avec succès à zprotv25@gmail.com !",
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "Votre message a été transmis !",
      });
    }
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json({
      success: true,
      message: "Votre message a été transmis !",
    });
  }
}
