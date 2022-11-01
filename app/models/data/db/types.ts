import utils from "@utils/index"


const { files, url, email, phone, rich_text, title, multi_select, number, status, select, icon, isDatabase, getProperties } = utils().notion


const types = () => {


    const typesObject =    {

        organizations: {
            name: "🫂Organizations",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.organizations
                return isDatabase(name, data)
            }
        },

        services: {
            name: "🛒Services",
            shape: (data: any) => {

                const { icon: Icon, properties: { URL, Name, Types, Status } } = data

                return {
                    url: url(URL),
                    icon: icon(Icon),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.services
                return isDatabase(name, data)
            }

        },
        links: {
            name: "🔗Links",
            shape: (data: any) => {
                const { URL, Name, Types, Status } = data?.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }

            },

            predicate: (data: any) => {
                const { name } = typesObject.links
                return isDatabase(name, data)
            }

        },

        faqs: {
            name: "❓FAQs",
            shape: (data: any) => {

                const { URL, Title, Types, Status } = data.properties

                return {
                    url: url(URL),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.faqs
                return isDatabase(name, data) ?? null
            }

        },
        portfolio: {
            name: "🎁Portfolio",
            shape: (data: any) => {

                const { URL, Name, Types, Status, Covers } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    covers: files(Covers),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.portfolio
                return isDatabase(name, data) ?? null
            }

        },

        social_media: {
            name: "📱Social Media",
            shape: (data: any) => {

                const { URL, Title, Types, Status } = data.properties

                return {
                    url: url(URL),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.social_media
                return isDatabase(name, data) ?? null
            }
        },

        meta: {
            name: "📏Meta",
            shape: (data: any) => {

                const { URL, Title, Types, Status, Values, Phone, Email, Files, Description } = getProperties(data)

                return {
                    url: url(URL),
                    files: files(Files),
                    email: email(Email),
                    phone: phone(Phone),
                    values: multi_select(Values),
                    description: rich_text(Description),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.meta
                return isDatabase(name, data)
            }

        },
    }
}

export default types