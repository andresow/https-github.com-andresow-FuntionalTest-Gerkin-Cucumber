Feature: SocialLogin

    Scenario: Get the information of the logged in user
        When the user with identification 1866001230144683 presses the facebook login button
        Then the user information will be returned