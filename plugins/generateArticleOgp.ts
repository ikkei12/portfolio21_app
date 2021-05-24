import cloudinary from '../plugins/cloudinary'

export default (ogpText: string) => {
  const encodeText = encodeURI(ogpText)

  // 第一引数は画像名、第二引数はオプション
  return cloudinary.url('ogp_b3ezfg.jpg', {
    version: '1621601547',
    transformation: [
      {
        overlay: {
          font_family: 'Sawarabi Gothic',
          font_weight: 'bold',
          font_size: 46,
          text_align: 'start',
          text: encodeText,
        } as any,
        width: '900',
        color: '#333',
        crop: 'fit',
      },
    ],
  })
}
