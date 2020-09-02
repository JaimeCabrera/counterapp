const getImagen = async () => {
  try {
    const apiKey = "lTed0SUVO3RxqNimew1FJoDwcw647EpL";

    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
    // const img = document.createElement("img");
    // img.src = url;
    // document.body.append(img);
  } catch (error) {
    // console.log(error);
    return 'no existe';
  }
};

export default getImagen;
// getImagen();

// console.log(getImagen());
