package com.study.event.domain.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.study.event.domain.entity.Event;

import java.time.LocalDate;

// 레코드는 필드를 소괄호 안에 만들어야함
public record EventCreate(
        String title,
        String desc,
        String imageUrl,
        @JsonFormat(pattern = "yyyy-MM-dd")
        LocalDate beginDate
) {

    public Event toEntity() {
    return Event.builder()
            .title(this.title)
            .description(this.desc)
            .image(this.imageUrl)
            .date(this.beginDate)
            .build();
    }
}
