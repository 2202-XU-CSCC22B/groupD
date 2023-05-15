package ph.cdo.xu.groudd.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import ph.cdo.xu.groudd.backend.exceptions.ApiError;

import java.util.List;

@Getter
@Setter
@Builder
public class CustomResponseBody {
    private String message;
    private List<ApiError> errors;
}
