const ImageComponet = (hi) => {
  // console.log(hi);
  // const {src,width,height,alt}=hi

  // return  <img {...hi}/>
    return (
      <div>
      <img src={hi.src} height={100} width={200}/>
</div>
    )
  
};
export default ImageComponet;
