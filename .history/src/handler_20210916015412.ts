export const uploadImage =(event:any)=>{
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    if(typeof(reader.result)==='string'){
      console.log(reader.result);
      return reader.result}
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}