Feature: Feedback form navigation
    As the user,
    I want to open and close feedback form,
    So that I can navigate the application

    Scenario: Open and close feedback form
        Given user wants to submit new feedback
        When user clicks "Add feedback" button
        And user clicks "Close" button
        Then feedback form is opened and closed

Feature: Feedback form validation
    As the user,
    I want feedback form to validate my input,
    So that I do not submit an empty form

    Scenario: Validate feedback form
        Given the feedback form is opened
        When user does not type anything in the form and submits it
        Then feedback form displays error message
        When user enters valid data
        Then errors are cleared

Feature: Adding new feedback
    As the user,
    I want to add new feedback,
    So that it can be visible in the application

    Scenario: Submit new feedback
        Given the feedback form has valid data
        When user submits the form
        Then new feedback item is sent to the server