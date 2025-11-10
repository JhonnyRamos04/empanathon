export interface Student {
  firstName: string
  lastName: string
  idCardNumber: string
}

export interface TeamRegistrationData {
  teamName: string
  career: string
  semester: string
  formata: string
  students: Student[]
}

const API_URL = process.env.NEXT_PUBLIC_API_TEAMS_URL || "https://api-empanathon-production.up.railway.app/api/teams"

export async function registerTeam(data: TeamRegistrationData) {
  try {
    console.log("[v0] Sending registration payload:", JSON.stringify(data, null, 2))

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseText = await response.text()
    console.log("[v0] API Response status:", response.status)
    console.log("[v0] API Response body:", responseText)

    if (!response.ok) {
      let errorMessage = `Error ${response.status}: ${response.statusText}`
      try {
        const errorData = JSON.parse(responseText)
        errorMessage = errorData.message || errorData.error || errorMessage
      } catch (e) {
        errorMessage = responseText || errorMessage
      }
      throw new Error(errorMessage)
    }

    const result = JSON.parse(responseText)
    console.log("[v0] Registration success:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("[v0] Registration error:", error)
    const errorMessage = error instanceof Error ? error.message : "Error desconocido en la inscripción"
    return { success: false, error: errorMessage }
  }
}
