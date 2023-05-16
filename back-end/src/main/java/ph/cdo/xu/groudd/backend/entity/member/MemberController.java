package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.joda.time.DateTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import ph.cdo.xu.groudd.backend.entity.CustomResponseBody;
import ph.cdo.xu.groudd.backend.exceptions.ApiError;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;
import ph.cdo.xu.groudd.backend.utils.DateService;
import ph.cdo.xu.groudd.backend.utils.EmailService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/member")
@AllArgsConstructor
@CrossOrigin
public class MemberController {
    private EmailService emailService;
    private DateService dateService;

    private MemberService memberService;

    @GetMapping(value = "/test")
    public String test(){
        return "Hello world!";
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomResponseBody> newMember(@RequestBody Member member, BindingResult bindingResult) throws MessagingException {
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
//
        member.setActive(false);
        member.setMembershipStatus(MembershipStatus.UNVERIFIED);
                Member temp = memberService.add(member);
                emailService.sendRegistrationEmail(temp.getEmail(), temp.getFirstName());

            return ResponseEntity.ok(CustomResponseBody.builder().message(temp.getFirstName() + " has been registered successfully").build());


    }

    @PutMapping(value = "/validate/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomResponseBody> verifyMember(@PathVariable("email") String email) throws MessagingException {
        Optional<Member> optionalMember = memberService.getMemberByEmail(email);
        Member member;
        if (optionalMember.isPresent()) {
            member = optionalMember.get();
        } else {
            throw new RuntimeException("Email not found");
        }

        member.setExpirationDate(dateService.addMonthsToDate(member.getStartDate(), 12));
        member.setMembershipStatus(MembershipStatus.ACTIVE);


        memberService.validateMember(email, member);
        emailService.sendValidationEmail(member.getEmail(), member.getFirstName(), new DateTime(member.getExpirationDate()).toString("MM DD YYYY"));

        String message = member.getFirstName() + " has been validated as a member";
        CustomResponseBody responseBody = CustomResponseBody.builder().message(message).build();
        return ResponseEntity.ok(responseBody);
    }

    @PutMapping(value = "/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomResponseBody> updateMember(@PathVariable("email") String email, @RequestBody Member member) throws MessagingException {

        return ResponseEntity.ok(responseBody);
    }




    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Member> getMembers(){
        return memberService.allMembers();
    }
}
