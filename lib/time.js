//日期库
import dayjs from 'dayjs'

//日期格式化
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)

//日期本地化
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')


export function dateFormat(tm){
	const d = dayjs(tm)
	if (dayjs().diff(d, "day") < 10) {
		return d.fromNow()
	}
	return d.format("YYYY-MM-DD")
}