//package ph.cdo.xu.groudd.backend.exceptions;
//
//import org.springframework.context.support.DefaultMessageSourceResolvable;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.FieldError;
//import org.springframework.web.bind.MethodArgumentNotValidException;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.RestControllerAdvice;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.stream.Collectors;
//
//@RestControllerAdvice
//public class GlobalExceptionHandler {
//
//
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<List<ApiError>> handleValidationErrors(MethodArgumentNotValidException ex) {
//        List<String> errors = ex.getBindingResult().getFieldErrors()
//                .stream().map(DefaultMessageSourceResolvable::getDefaultMessage).collect(Collectors.toList());
//        List<String> fields = ex.getBindingResult().getFieldErrors()
//                .stream().map(FieldError::getField).toList();
//        List<ApiError> apiErrors = new ArrayList<>();
//        for(int i = 0; i < errors.size(); i++){
//            apiErrors.add(ApiError.builder()
//                            .message(errors.get(i))
//                            .field(fields.get(i))
//                    .build());
//        }
//        return new ResponseEntity<>(apiErrors, new HttpHeaders(), HttpStatus.BAD_REQUEST);
//    }
//
//    private Map<String, List<String>> getErrorsMap(List<String> errors) {
//        Map<String, List<String>> errorResponse = new HashMap<>();
//        errorResponse.put("errors", errors);
//        return errorResponse;
//    }
//
//
//
//}
