import { Schema, model, models } from "mongoose";

const DEFAULT_STRING_SCHEMA_TYPES = {
  type: String,
  required: true,
  lowercase: true,
  trim: true,
}

const developerSchema = new Schema({
  firstName: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    minLength: 3,
  },
  lastName: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    minLength: 3,
  },
  job: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    minLength: 3,
  },
  image: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    required: false,
  },
  phone: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    minLength: 11,
    maxLength: 11,
  },
  email: {
    ...DEFAULT_STRING_SCHEMA_TYPES,
    required: false,
  },
  skills: [
    {
      title: {
        ...DEFAULT_STRING_SCHEMA_TYPES,
      },
      level: {
        type: String,
        enum: ['BASIC', 'INTERMEDIATE', 'ADVANCED'],
        required: true,
        uppercase: true,
        trim: true,
      }
    }
  ],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    trim: true,
  }
}, {
  virtuals: {
    fullName: {
      get() {
        return (`${this.firstName} ${this.lastName}`)
      }
    }
  }
})

const Developer = models.Developer || model('Developer', developerSchema)

export default Developer