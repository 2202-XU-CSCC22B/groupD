package ph.cdo.xu.groudd.backend.entity.transaction;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Builder;
import lombok.Data;
import org.joda.time.DateTime;
import org.springframework.lang.Nullable;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.model.Name;
import ph.cdo.xu.groudd.backend.entity.model.enums.PaymentMethod;
import ph.cdo.xu.groudd.backend.entity.model.enums.TransactionType;
import ph.cdo.xu.groudd.backend.entity.staff.Staff;

import java.util.Date;

@Data
@Builder
public class TransactionDTO {
    @Builder.Default
    private Long id = null;

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;
    @Builder.Default
    private String description = "remarks";

    @Builder.Default
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod= PaymentMethod.Cash;
    private TransactionType transactionType;

    @Enumerated(EnumType.STRING)
    private Double value;

    @Nullable
    private Long memberID;
    @Nullable
    private Long staffID;

    @Nullable
    private String name;

    @Nullable
    private String entity;



}
