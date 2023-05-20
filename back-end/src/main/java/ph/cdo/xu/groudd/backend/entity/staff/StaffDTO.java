package ph.cdo.xu.groudd.backend.entity.staff;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;

import java.util.Date;

@Data
@Builder
public class StaffDTO {


    private Long id;

    @Builder.Default
    private String firstName = "First Name";


    @Builder.Default
    private String lastName = "Last Name";


    @Builder.Default
    private String phone= "000-0000-000";


    private String email;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Gender gender = Gender.MALE;

    @Builder.Default
    private String address = "Cagayan de Oro City";

    @Enumerated(EnumType.STRING)
    private Position position;


    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date birthday;


    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dateStarted;


    @Enumerated(EnumType.STRING)
    private Status status;
}
