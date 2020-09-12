import moment from 'moment';

export const CN_DATE = date => {
    if (!date) return date;
    moment.locale("zh-cn")
    return moment(date).format('LL')
}