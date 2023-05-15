package ph.cdo.xu.groudd.backend.exceptions;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Builder
public class ApiError {
    private HttpStatus status;
    private String message;
    private String field;

    public ApiError(HttpStatus status, String message, String field) {
        this.status = status;
        this.message = message;
        this.field = field;
    }


}

