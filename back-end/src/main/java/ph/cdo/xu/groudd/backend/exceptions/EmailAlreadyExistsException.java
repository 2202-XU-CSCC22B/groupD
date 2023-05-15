package ph.cdo.xu.groudd.backend.exceptions;

public class EmailAlreadyExistsException extends RuntimeException{
    public EmailAlreadyExistsException(String message){
            super(message);
        }
    }
