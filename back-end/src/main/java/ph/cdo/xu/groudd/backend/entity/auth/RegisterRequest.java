package ph.cdo.xu.groudd.backend.entity.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.entity.model.enums.UserRole;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private Gender gender;

    private String address;
    private Position position;

    private Date birthday;

    private Date dateStarted;
    private Status status;

    private UserRole userRole;


}
