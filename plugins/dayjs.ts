import dayjs from 'dayjs'

export default ({ _app }: any, inject: any) => {
  inject('dayjs', (string: string) => dayjs(string))
}
