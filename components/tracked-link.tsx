"use client"

import type { MouseEvent, ReactNode } from "react"
import Link from "next/link"
import { trackCtaClick } from "@/lib/analytics"

type TrackedLinkProps = {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
  ctaLabel: string
  ctaLocation: string
  trafficContext?: string
  onClick?: () => void
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")
}

export default function TrackedLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
  ctaLabel,
  ctaLocation,
  trafficContext,
  onClick,
}: TrackedLinkProps) {
  const handleClick = (_event: MouseEvent<HTMLAnchorElement>) => {
    trackCtaClick({
      cta_label: ctaLabel,
      cta_location: ctaLocation,
      traffic_context: trafficContext,
      destination: href,
    })

    onClick?.()
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
