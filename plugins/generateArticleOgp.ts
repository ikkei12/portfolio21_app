import cloudinary from '~/plugins/cloudinary'

export default (ogpText: string) => {
  const encodeText = encodeURI(ogpText)

  // 第一引数は画像名、第二引数はオプション
  return cloudinary.url('ogp_b3ezfg.jpg', {
    version: '1621601547',
    transformation: [
      {
        overlay: {
          font_family: 'notosansjp-bold.otf',
          font_size: 40,
          text_align: 'center',
          text: encodeText,
        },
        width: '1000',
        color: '#333',
        crop: 'fit',
      },
    ],
  })
}
