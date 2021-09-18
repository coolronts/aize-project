export const imgToBase64 = (event:any):Promise<any> =>{
  let file = event.target.files[0];
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}