import React, { useEffect, useRef } from "react"

export const Comments = () => {
  const commentRef = useRef(null)

  useEffect(() => {
    const giscus = document.createElement("script")

    const giscusConfig = {
      "src": "https://giscus.app/client.js",
      "data-repo": "WHITEPAEK/whitepaek.github.io",
      "data-repo-id": "R_kgDOK__eEA",
      "data-category": "Comments",
      "data-category-id": "DIC_kwDOK__eEM4Cceht",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": "preferred_color_scheme",
      "data-lang": "ko",
      "crossorigin": "anonymous",
      "async": true
    }

    Object.entries(giscusConfig).forEach(([key, value]) => {
      giscus.setAttribute(key, value)
    })

    commentRef.current.appendChild(giscus)
  }, [])

  return (
    <div className="pt-16">
      <div ref={commentRef} />
    </div>
  )
}

export default Comments