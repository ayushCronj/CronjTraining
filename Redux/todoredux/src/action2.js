
export function handledelete(payload) {
    console.log(payload);
    return { type: "DELETE_ARTICLE", payload }
  };