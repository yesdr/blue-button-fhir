"use strict";

var cases = module.exports = [];

var na = null;

cases[0] = {};

cases[0].resources = [{
    "id": "Patient/p-0-0",
    "content": {
        "resourceType": "Patient",
        "identifier": [{
            "system": "urn:oid:2.16.840.1.113883.19.5.99999.2",
            "value": "998991"
        }, {
            "system": "urn:oid:2.16.840.1.113883.4.1",
            "value": "111-00-2330"
        }],
        "name": {
            "family": [
                "Jones"
            ],
            "given": [
                "Isabella",
                "Isa"
            ]
        },
        "telecom": [{
            "system": "phone",
            "value": "(816)276-6909",
            "use": "home"
        }],
        "gender": {
            "coding": [{
                "system": "http://hl7.org/fhir/v3/AdministrativeGender",
                "code": "F",
                "display": "Female"
            }]
        },
        "birthdate": "1975-05-01",
        "address": [{
            "use": "home",
            "line": [
                "1357 Amber Drive"
            ],
            "city": "Beaverton",
            "state": "OR",
            "zip": "97867",
            "country": "US"
        }],
        "maritalStatus": {
            "coding": [{
                "system": "http://hl7.org/fhir/v3/MaritalStatus",
                "code": "M",
                "display": "Married"
            }]
        },
        "extension": [{
            "url": "http://hl7.org/fhir/StructureDefinition/us-core-religion",
            "valueCodeableConcept": {
                "coding": [{
                    "system": "http://hl7.org/fhir/v3/vs/ReligiousAffiliation",
                    "code": "1013",
                    "display": "Christian (non-Catholic, non-specific)"
                }]
            }
        }, {
            "url": "http://hl7.org/fhir/Profile/us-core#race",
            "valueCodeableConcept": {
                "coding": [{
                    "system": "http://hl7.org/fhir/v3/Race",
                    "code": "2106-3",
                    "display": "White"
                }]
            }
        }, {
            "url": "http://hl7.org/fhir/Profile/us-core#ethnicity",
            "valueCodeableConcept": {
                "coding": [{
                    "system": "http://hl7.org/fhir/v3/Ethnicity",
                    "code": "2186-5",
                    "display": "Not Hispanic or Latino"
                }]
            }
        }]
    }
}];

cases[0].input = cases[0].resources[0];

cases[0].result = {
    "name": {
        "middle": [
            "Isa"
        ],
        "last": "Jones",
        "first": "Isabella"
    },
    "dob": {
        "point": {
            "date": "1975-05-01T00:00:00.000Z",
            "precision": "day"
        }
    },
    "gender": "Female",
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.99999.2",
        "extension": "998991"
    }, {
        "identifier": "2.16.840.1.113883.4.1",
        "extension": "111-00-2330"
    }],
    "marital_status": "Married",
    "addresses": [{
        "street_lines": [
            "1357 Amber Drive"
        ],
        "city": "Beaverton",
        "state": "OR",
        "zip": "97867",
        "country": "US",
        "use": "home address"
    }],
    "phone": [{
        "number": "(816)276-6909",
        "type": "primary home"
    }],
    "race": "White",
    "ethnicity": "Not Hispanic or Latino",
    "religion": "Christian (non-Catholic, non-specific)"
};