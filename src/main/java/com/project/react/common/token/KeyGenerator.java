package com.project.react.common.token;

import java.security.SecureRandom;
import java.util.Base64;

public class KeyGenerator {
    private static final int KEY_LENGTH = 32; // 비밀키 길이 (바이트 단위)

    public static String generateRandomKey() {
        byte[] keyBytes = new byte[KEY_LENGTH];
        new SecureRandom().nextBytes(keyBytes);
        return Base64.getEncoder().encodeToString(keyBytes);
    }
}
