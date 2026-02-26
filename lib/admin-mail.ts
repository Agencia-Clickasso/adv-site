type SendMagicLinkEmailInput = {
  email: string
  loginUrl: string
}

export async function sendMagicLinkEmail(input: SendMagicLinkEmailInput) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    console.log("[admin-magic-link] Resend não configurado. Link de acesso:", input.loginUrl)
    return
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.email],
      subject: "Seu link de acesso ao painel do blog",
      html: `
        <p>Olá,</p>
        <p>Use o link abaixo para acessar o painel do blog:</p>
        <p><a href="${input.loginUrl}">${input.loginUrl}</a></p>
        <p>Este link expira em 15 minutos.</p>
      `,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Falha ao enviar magic link: ${response.status} ${body}`)
  }
}
