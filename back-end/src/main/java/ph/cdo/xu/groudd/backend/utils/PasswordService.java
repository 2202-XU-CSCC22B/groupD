package ph.cdo.xu.groudd.backend.utils;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Random;

@Service
public class PasswordService {


    public  String generatePassword(int length) {
            if (length < 8) {
                throw new IllegalArgumentException("Password length must be at least 8 characters.");
            }

            Random random = new SecureRandom();
            StringBuilder sb = new StringBuilder(length);

            for (int i = 0; i < length; i++) {
                String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
                int randomIndex = random.nextInt(CHARACTERS.length());
                char randomChar = CHARACTERS.charAt(randomIndex);
                sb.append(randomChar);
            }

            return sb.toString().replace("\"", "");
        }

}
