Feature: Feedback form
    As the user,
    I want to add, edit and delete feedback via a form,
    So that new feedback is displayed in the application

    @feedback-form-navigation
    Scenario: Open and close feedback form
        Given user wants to submit new feedback
        When user clicks "Add feedback" button
        And user clicks "Close" button
        Then feedback form is opened and closed

    @feedback-form-validation
    Scenario: Validate feedback form
        Given the feedback form is opened
        When user does not type anything in the form and submits it
        Then feedback form displays error message
        When user enters valid data
        Then errors are cleared

    @submitting-new-feedback
    Scenario: Submit new feedback
        Given the feedback form has valid data
        When user submits the form
        Then new feedback item is sent to the server