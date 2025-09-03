
import {EVENT_API_URL } from '../config/host-config.js';
export const eventListLoader = async() => {

    const response = await fetch(`${EVENT_API_URL}?page=76`);

    // loader가 리턴한 데이터는 라우팅 된 페이지와
    // 그 하위 컴포넌트에서 언제든 사용가능
    // loader는 fetch결과를 바로 리턴하는 경우 알아서 json을 추출한다.
    // 한번 렌더링 하면 되는 페이지는 로더로 처리함
    return response;
}

export const eventDetailLoader= async({params}) => {

    return await fetch(`${EVENT_API_URL}/${params.eventId}`);
}