"use client"

import { useState, useEffect } from "react"
import { ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BrowserRedirectModal() {
  const [showModal, setShowModal] = useState(false)
  const [isLinkedInBrowser, setIsLinkedInBrowser] = useState(false)

  useEffect(() => {
    const detectLinkedInBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase()

      const isLinkedIn =
        userAgent.includes("linkedin") ||
        userAgent.includes("linkedinapp") ||
        (userAgent.includes("mobile") && userAgent.includes("version") && !userAgent.includes("chrome")) ||
        (!("chrome" in window) && !userAgent.includes("safari") && userAgent.includes("mobile"))

      return isLinkedIn
    }

    const linkedInDetected = detectLinkedInBrowser()
    setIsLinkedInBrowser(linkedInDetected)

    if (linkedInDetected && !localStorage.getItem("browserRedirectDismissed")) {
      setShowModal(true)
    }
  }, [])

  const handleOpenInBrowser = () => {
    const currentUrl = window.location.href

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const link = document.createElement("a")
      link.href = currentUrl
      link.target = "_blank"
      link.rel = "noopener noreferrer"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(currentUrl, "_blank", "noopener,noreferrer")
    }

    setShowModal(false)
    localStorage.setItem("browserRedirectDismissed", "true")
  }

  const handleDismiss = () => {
    setShowModal(false)
    localStorage.setItem("browserRedirectDismissed", "true")
  }

  if (!showModal || !isLinkedInBrowser) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-gray-950 text-white border-blue-700 border-2 shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-blue-400">Better Experience Available</CardTitle>
            <Button variant="ghost" size="sm" onClick={handleDismiss} className="text-gray-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            For the best experience with videos and animations, we recommend opening this site in your default browser.
          </p>

          <div className="flex flex-col space-y-3">
            <Button
              onClick={handleOpenInBrowser}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Browser</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleDismiss}
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-2 rounded-lg transition-colors duration-200 bg-transparent"
            >
              Continue Here
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">This message won't show again after you choose an option.</p>
        </CardContent>
      </Card>
    </div>
  )
}
