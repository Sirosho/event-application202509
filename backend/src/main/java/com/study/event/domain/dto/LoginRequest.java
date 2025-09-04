package com.study.event.domain.dto;

import lombok.Builder;

@Builder
public record LoginRequest(
        String email,
        String password
) {
}
