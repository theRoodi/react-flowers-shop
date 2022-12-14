export const loaderShop = (data) => {
  return fetch()
    .then((res) => {
      if (res.ok) {
        return res.json()
      }

      throw new Error('Oh, No!!! Something went wrong: 💥')
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    })
}

