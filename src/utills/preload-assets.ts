
const preloadAssets = () => {
  return new Promise<void>((resolve) => {
    if (typeof document === "undefined") return resolve(); // Ensure this runs in the browser

    // Create a wrapper to store preloading elements (invisible to users)
    const imgwrap = document.createElement("div");
    imgwrap.style.visibility = "hidden";
    imgwrap.style.position = "absolute";
    imgwrap.style.top = "0";
    imgwrap.style.left = "0";
    document.body.appendChild(imgwrap);

    // Select all SVGs, images, and videos
    const assets = document.querySelectorAll("svg, img, video");

    // Array to keep track of loading promises
    const preloadPromises: Promise<void>[] = [];

    // Iterate over all assets
    assets.forEach((el) => {
      const tagName = el.tagName.toLowerCase();

      if (tagName === "img") {
        // Preload image
        preloadPromises.push(
          new Promise<void>((resolve, reject) => {
            const imgEl = document.createElement("img");
            imgEl.src = (el as HTMLImageElement).src || "";
            imgEl.onload = () => resolve();
            imgEl.onerror = () => reject();
            imgwrap.appendChild(imgEl);
          })
        );
      } else if (tagName === "svg") {
        // Handle both inline SVGs and external SVG images
        const svgEl = el as SVGElement;
        const xlinkHref = svgEl.getAttribute("xlink:href");
        const src = svgEl.getAttribute("src");

        if (xlinkHref || src) {
          preloadPromises.push(
            new Promise<void>((resolve, reject) => {
              const imgEl = document.createElement("img");
              imgEl.src = src || xlinkHref || "";
              imgEl.onload = () => resolve();
              imgEl.onerror = () => reject();
              imgwrap.appendChild(imgEl);
            })
          );
        } else {
          // For inline SVGs, consider them already "loaded"
          preloadPromises.push(Promise.resolve());
        }
      } else if (tagName === "video") {
        // Preload video
        preloadPromises.push(
          new Promise<void>((resolve, reject) => {
            const videoEl = el as HTMLVideoElement;
            const src = videoEl.getAttribute("src");
            if (src) {
              const videoPreload = document.createElement("video");
              videoPreload.src = src;
              videoPreload.onloadeddata = () => resolve();
              videoPreload.onerror = () => reject();
              imgwrap.appendChild(videoPreload);
            } else {
              resolve(); // No src, nothing to preload
            }
          })
        );
      }
    });

    // Wait for all assets to be loaded
    Promise.all(preloadPromises)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.error("Error loading some assets: ", error);
        resolve(); // Resolve even if some assets fail to load
      })
      .finally(() => {
        // Cleanup the wrapper after preloading
        document.body.removeChild(imgwrap);
      });
  });
};

export default preloadAssets;

// utils/preloadAssets.js
export const preloadImages = (images: any) => {
  const promises = images.map(
    (src: any) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      })
  );
  return Promise.all(promises);
};

export const preloadVideos = (videos: any) => {
  const promises = videos.map(
    (src: any) =>
      new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = src;
        video.onloadeddata = resolve;
        video.onerror = reject;
      })
  );
  return Promise.all(promises);
};
