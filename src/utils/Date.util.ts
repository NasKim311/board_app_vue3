import moment from 'moment';
import 'moment/locale/ko';

export const stringToDate = (ymd: string, format?: string) => {
    if (!format) format = 'YYYYMMDD';

    // ymd 가 null이면 null을 리턴 -> datePicker에서 selected속성 에러 방지
    if (!ymd) return null;

    return moment(ymd, format).toDate();
};

export const dateFormat = (date: Date, format?: string) => {
    if (!format) format = 'YYYY.MM.DD';

    return moment(date).format(format);
};

export const stringFormat = (ymd: string) => {
    let format = 'YYYY.MM.DD';

    return moment(ymd, 'YYYYMMDD').format(format);
};

export const customStringFormat = (ymd: string, prevFormat: string, nextFormat: string) => {
    return moment(ymd, prevFormat).format(nextFormat);
};

export function toHoursAndMinutes(totalSeconds: number, format?: string) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (!format) {
        format = 'Hh Mm';
    }

    return format.replace('H', hours.toString()).replace('M', minutes.toString());
}

export function getHourList() {
    let result = [];

    for (let i = 0; i < 24; i++) {
        let hour = i.toString();

        if (i < 10) {
            hour = `0${hour}`;
        }

        result.push(hour);
    }

    return result;
}

export function getMinuitList() {
    let result = [];

    for (let i = 0; i < 60; i++) {
        let minute = i.toString();

        if (i < 10) {
            minute = `0${minute}`;
        }

        result.push(minute);
    }

    return result;
}

export function modifyDate(ymd: string, yearOffset: number = 0, monthOffset: number = 0, dayOffset: number = 0): Date | null {
    if (!ymd) return null;

    // 기본 형식: YYYYMMDD
    const format = 'YYYYMMDD';

    // moment로 날짜를 파싱하고 수정
    const modifiedDate = moment(ymd, format).add(yearOffset, 'years').add(monthOffset, 'months').add(dayOffset, 'days');

    return modifiedDate.toDate();
}
