package ph.cdo.xu.groudd.backend.entity.auth;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.staff.Staff;
import ph.cdo.xu.groudd.backend.entity.staff.StaffDTO;
import ph.cdo.xu.groudd.backend.entity.staff.StaffRepository;
import ph.cdo.xu.groudd.backend.entity.staff.StaffService;
import ph.cdo.xu.groudd.backend.entity.user.User;
import ph.cdo.xu.groudd.backend.entity.user.UserRepository;
import ph.cdo.xu.groudd.backend.utils.JwtService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final StaffService staffService;
    private final StaffRepository staffRepository;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;
    public AuthenticationResponse register(RegisterRequest request) {

        System.out.println("Here at Register request!!!!");


        StaffDTO staffDTO = StaffDTO
                .builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .gender(request.getGender())
                .address(request.getAddress())
                .position(request.getPosition())
                .birthday(request.getBirthday())
                .dateStarted(request.getDateStarted())
                .status(request.getStatus())
                .build();

        Staff staff = null;
        Optional<Staff> optionalStaff = staffRepository.findByContactDetailsEmail(request.getEmail());
        staff = optionalStaff.orElseGet(() -> staffService.addStaff(staffDTO));

        Optional<User> optionalUser = userRepository.findByUsername(request.getEmail());
        if(optionalUser.isPresent()){
           User user = optionalUser.get();
            String jwtToken = jwtService.generateToken(user);

            return AuthenticationResponse
                    .builder()
                    .token(jwtToken)
                    .build();
        }else{
            User user = User
                    .builder()
                    .userRole(request.getUserRole())
                    .username(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .userRole(request.getUserRole())
                    .build();
            userRepository.save(user);

            String jwtToken = jwtService.generateToken(user);




            return AuthenticationResponse
                    .builder()
                    .token(jwtToken)
                    .build();
        }


    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {

       try{
           authenticationManager.authenticate(
                   new UsernamePasswordAuthenticationToken(
                           request.getUsername(),
                           request.getPassword()
                   ));

           User user = userRepository.findByUsername(request.getUsername())
                   .orElseThrow();

           String jwtToken = jwtService.generateToken(user);

           return AuthenticationResponse
                   .builder()
                   .token(jwtToken)
                   .role(user.getUserRole())
                   .build();
       }catch (DisabledException e){
                throw new DisabledException("USER_DISABLED");
       }catch (BadCredentialsException e){
           throw new BadCredentialsException("INVALID_CREDENTIALS");
       }


    }
}
