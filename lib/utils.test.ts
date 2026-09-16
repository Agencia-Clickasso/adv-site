import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("cn", () => {
  it("mescla classes e remove conflitos do tailwind", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
  })

  it("ignora valores falsy", () => {
    expect(cn("text-sm", false && "hidden", undefined, "font-medium")).toBe("text-sm font-medium")
  })
})
