tau.mashups.addModule("CustomFieldConstraints/config", [
    {
        "processId": 4,
        "constraints": {
            "userstory": {
                "entityStates": [
                    {
                        "name": "Open",
                        "requiredCustomFields": [
                            "Cf1",
                            "Cf3"
                        ]
                    }
                ],
                "customFields": [
                    {
                        "name": "Cf1",
                        "valueIn": [
                            "Cf1ValueThatRequiresCf2"
                        ],
                        "requiredCustomFields": [
                            "Cf2"
                        ]
                    },
                    {
                        "name": "Cf3",
                        "valueIn": [
                            "Cf3ValueThatRequiresCf4"
                        ],
                        "requiredCustomFields": [
                            "Cf4"
                        ]
                    }
                ]
            },
            "task": {
                "entityStates": [
                    {
                        "name": "Done",
                        "requiredCustomFields": [
                            "Cf1"
                        ]
                    }
                ]
            },
            "project": {
                "customFields": [
                    {
                        "name": "Cf1",
                        "valueNotIn": [
                            "Cf1ValueThatDoesNotRequireCf2"
                        ],
                        "requiredCustomFields": [
                            "Cf2"
                        ]
                    }
                ]
            }
        }
    },
    {
        "constraints": {
            "user": {
                "entityStates": [
                    {
                        "name": "Open",
                        "requiredCustomFields": [
                            "Age"
                        ]
                    }
                ],
                "customFields": [
                    {
                        "name": "Age",
                        "requiredCustomFields": [
                            "Height"
                        ]
                    }
                ]
            }
        }
    }
]);