//package ph.cdo.xu.groudd.backend.exceptions;
//
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.MethodArgumentNotValidException;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.context.request.WebRequest;
//import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
//
//@ControllerAdvice
//public class RequiredFieldsExceptionHandler extends ResponseEntityExceptionHandler {
//
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<Object> handleValidationException(
//            MethodArgumentNotValidException ex, WebRequest request) {
//        String errorMessage = ex.getBindingResult().getFieldErrors().get(0).getDefaultMessage();
//        String type = "Required Fields";
//        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, errorMessage, type);
//        return handleExceptionInternal(ex, apiError,
//                new HttpHeaders(), apiError.getStatus(), request);
//    }
//}
