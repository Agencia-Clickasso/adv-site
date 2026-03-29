"use client"

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

type BaseAnalyticsPayload = {
  page_path?: string
}

type CtaClickPayload = BaseAnalyticsPayload & {
  cta_label: string
  cta_location: string
  traffic_context?: string
  destination?: string
}

type LeadPayload = BaseAnalyticsPayload & {
  cta_label: string
  cta_location: string
  traffic_context?: string
}

function getCurrentPagePath() {
  if (typeof window === "undefined") return ""
  return `${window.location.pathname}${window.location.search}${window.location.hash}`
}

export function trackEvent(eventName: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return

  const enrichedPayload = {
    page_path: getCurrentPagePath(),
    ...payload,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...enrichedPayload })

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, enrichedPayload)
  }
}

export function trackCtaClick(payload: CtaClickPayload) {
  trackEvent("cta_click", payload)
}

export function trackLeadSubmission(payload: LeadPayload) {
  trackEvent("generate_lead", payload)
}
