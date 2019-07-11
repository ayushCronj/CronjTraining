
export function markArticle(payload) {
    console.log(payload);
    return { type: "MARK_ARTICLE", payload }
  };