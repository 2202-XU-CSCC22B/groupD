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
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.exceptions.ApiError;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;
import ph.cdo.xu.groudd.backend.utils.DateService;
import ph.cdo.xu.groudd.backend.utils.EmailService;

import java.util.*;

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
        String email = member.getContactDetails().getEmail();
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

        member.getMembershipDetails().setMembershipStatus(Status.UNVERIFIED);
        member.getMembershipDetails().setMonthlySubscriptionStatus(Status.UNVERIFIED);
        member.getMembershipDetails().setStudentStatus(Status.UNVERIFIED);

                Member temp = memberService.add(member);
                emailService.sendRegistrationEmail(temp.getContactDetails().getEmail(), temp.getName().getFirstName());

            return ResponseEntity.ok(CustomResponseBody.builder().message(temp.getName().getFirstName()+ " has been registered successfully").build());


    }

    @PutMapping(value = "/validate/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomResponseBody> verifyMember(@PathVariable("email") String email) throws MessagingException {


        Member member =   memberService.validateMember(email);
        emailService.sendValidationEmail(member.getContactDetails().getEmail(), member.getName().getFirstName(), member.getMembershipDetails().getMembershipEndDate().toString());


        String message = member.getName().getFirstName() + " has been validated as a member";
        CustomResponseBody responseBody = CustomResponseBody.builder().message(message).build();
        return ResponseEntity.ok(responseBody);
    }

    @PutMapping(value = "update/{email}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomResponseBody> updateMember(@PathVariable("email") String email, @RequestBody Member member) throws MessagingException {
        Member temp = memberService.update(email, member);

        String message = temp.getName().getFirstName() + " has been updated!";
        CustomResponseBody responseBody = CustomResponseBody.builder().message(message).build();

        return ResponseEntity.ok(responseBody);
    }




    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Map<String, Object>> getMembers() {

        return memberService.sendMembersToFrontEnd( memberService.allVerified());

    }


    @GetMapping(value = "/unverified", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Map<String, Object>> getUnverifiedMembers() {
        return memberService.sendMembersToFrontEnd( memberService.allUnverified());
    }


    @DeleteMapping(value= "/delete/{email}")
    public ResponseEntity<CustomResponseBody> deleteMember(@PathVariable("email") String email){
        memberService.delete(email);
        return ResponseEntity.ok(CustomResponseBody.builder().message(email + " has been deleted!").build());

    }

    @GetMapping(value = "/allMembers", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Map<String, Object>> getAllMembers() {

        return memberService.sendMembersToFrontEnd(memberService.allMembers());

    }

    @GetMapping(value= "/count", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> countAll(){
        Map<String, Object> map = new HashMap<>();
        map.put("members", memberService.countActiveMembers());
        map.put("students", memberService.countActiveStudents());
        map.put("monthly", memberService.countActiveMonthly());
        map.put("verifiedMembers", memberService.allVerified().size());
        map.put("pendingRegistrations", memberService.allUnverified().size());

        return ResponseEntity.ok(map);
    }
}
