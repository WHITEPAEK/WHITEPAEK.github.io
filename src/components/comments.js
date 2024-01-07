import React, { useEffect, useRef } from "react"

export const Comments = () => {
  const commentRef = useRef(null)

  useEffect(() => {
    const utterances = document.createElement("script")

    const utterancesConfig = {
      src: "https://utteranc.es/client.js",
      repo: "WHITEPAEK/whitepaek.github.io",
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true
    }

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    commentRef.current.appendChild(utterances)
  }, [])

  return (
    <div className="pt-16">
      {/*<hr className="my-0" />*/}
      <div ref={commentRef} />
    </div>
  )
}

export default Comments