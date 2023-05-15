package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import ph.cdo.xu.groudd.backend.entity.CustomResponseBody;
import ph.cdo.xu.groudd.backend.exceptions.ApiError;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/member")
@AllArgsConstructor
@CrossOrigin
public class MemberController {


    private MemberService memberService;

    @GetMapping(value = "/test")
    public String test(){
        return "Hello world!";
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.ALL_VALUE)
    public ResponseEntity<CustomResponseBody> newMember(@RequestBody Member member, BindingResult bindingResult){
        String email = member.getEmail();
        if(memberService.doesEmailExists(email)){
            System.out.println("Result : " + memberService.doesEmailExists(email));
            throw new EmailAlreadyExistsException(email + " already exists!");
        }
        if (bindingResult.hasErrors()) {
            List<FieldError> fieldErrors = bindingResult.getFieldErrors();
            List<ApiError> errors = new ArrayList<>();

            for (FieldError fieldError : fieldErrors) {
                ApiError error = ApiError.builder()
                        .status(HttpStatus.BAD_REQUEST)
                        .message(fieldError.getDefaultMessage())
                        .field(fieldError.getField())
                        .build();
                errors.add(error);
            }

            return ResponseEntity.badRequest().body(CustomResponseBody.builder().errors(errors).build());
        }
                Member temp = memberService.add(member);



            return ResponseEntity.ok(CustomResponseBody.builder().message(temp.getFirstName() + " has been registered successfully").build());


    }

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Member> getMembers(){
        return memberService.allMembers();
    }
}
